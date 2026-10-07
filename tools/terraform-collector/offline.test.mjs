import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const source = readFileSync(new URL('./Code.gs', import.meta.url), 'utf8');
const readerSource = readFileSync(new URL('../forms/candidate/reporting-reader.gs', import.meta.url), 'utf8');
function setup({ privateRepo = true, property = '557424928', gaFailure = false, rows = [], summaryStatus = 'complete' } = {}) {
  const script = new Map([['GA4_PROPERTY_ID', property], ['BING_API_KEY', 'FAKE-BING-SECRET'], ['GITHUB_TOKEN', 'FAKE-GITHUB-SECRET']]);
  const user = new Map();
  const store = map => ({ getProperty: k => map.get(k), setProperty: (k,v) => map.set(k,v), deleteProperty: k => map.delete(k) });
  const calls = [], uploads = [];
  const snapshotAt = new Date().toISOString();
  let triggers = 0, unlocked = false;
  const context = vm.createContext({
    console: { log() {} },
    PropertiesService: { getScriptProperties: () => store(script), getUserProperties: () => store(user) },
    LockService: { getScriptLock: () => ({ waitLock() {}, releaseLock() { unlocked = true; } }) },
    Utilities: {
      formatDate: (d, zone) => new Intl.DateTimeFormat('en-CA', { timeZone: zone, year:'numeric', month:'2-digit', day:'2-digit' }).format(d),
      base64Encode: s => Buffer.from(s).toString('base64'), Charset: { UTF_8: 'utf8' }, sleep() {}
    },
    ScriptApp: {
      getOAuthToken: () => 'FAKE-GOOGLE-SECRET', requireAllScopes() {}, AuthMode: { FULL: 'FULL' },
      WeekDay: { MONDAY: 'MONDAY' }, getProjectTriggers: () => [],
      newTrigger() { const chain = new Proxy({}, { get: (_, k) => () => { if (k === 'create') triggers++; return chain; } }); return chain; }
    },
    UrlFetchApp: { fetch(url, options) {
      calls.push(url);
      let status = 200, body;
      if (url.startsWith('https://api.github.com/')) {
        if (options.method === 'put') { uploads.push(JSON.parse(Buffer.from(JSON.parse(options.payload).content,'base64').toString())); body = {}; }
        else if (url.includes('/contents/')) { status = 404; body = {}; }
        else body = { private: privateRepo, full_name: 'Nodina-co/nodina-marketing-analytics', default_branch: 'main' };
      } else if (url.startsWith('https://sheets.googleapis.com/')) {
        if (url.includes('/FAKE-SUMMARY/')) {
          const range = decodeURIComponent(url.split('/values/')[1].split('?')[0]);
          body = {values: range.startsWith('Snapshot!')
            ? [['schema','status','computed_at','generation'],['nodina-counts-v1',summaryStatus,snapshotAt,'fake-generation']]
            : [['day','ref','leads'], ['2026-10-05','/fr/contact/',2]]};
        } else body = { values: [['timestamp','ref','name','email','project','qualified'], ...rows] };
      }
      else if (url.includes('GetUserSites')) body = { d: [{ Url:'https://nodina.com/', IsVerified:true, VerificationCode:'DO-NOT-EXPORT' }] };
      else if (url.includes('bing.com/')) body = { d: [] };
      else if (gaFailure && url.includes('analyticsdata.googleapis.com')) { status = 403; body = { error:'FAKE-GOOGLE-SECRET' }; }
      else body = {};
      return { getResponseCode: () => status, getContentText: () => JSON.stringify(body) };
    } }
  });
  vm.runInContext(source, context);
  vm.runInContext(readerSource, context);
  return { run: s => vm.runInContext(s, context), script, user, calls, uploads, triggers: () => triggers, unlocked: () => unlocked };
}

test('new empty sources upload notes, keep secrets out and allow scheduling only after the test', () => {
  const s = setup();
  assert.throws(() => s.run('installWeeklySchedule()'), /uploadTestReport/);
  s.run('uploadTestReport()');
  assert.equal(s.uploads[0].errors.length, 0);
  assert.ok(s.uploads[0].notes.some(n => n.includes('no finalized data')));
  assert.ok(s.uploads[0].notes.some(n => n.includes('empty list')));
  assert.doesNotMatch(JSON.stringify(s.uploads), /SECRET|DO-NOT-EXPORT/);
  s.run('installWeeklySchedule()');
  assert.equal(s.triggers(), 1);
  assert.ok(s.unlocked());
});

test('a public destination is refused before reading sources or uploading', () => {
  const s = setup({privateRepo:false});
  assert.throws(() => s.run('uploadTestReport()'), /must be private/);
  assert.equal(s.uploads.length, 0);
  assert.equal(s.calls.length, 1);
  assert.ok(s.unlocked());
});

test('a measurement ID creates an explicit partial failure without calling GA4 or unlocking scheduling', () => {
  const s = setup({property:'G-J8NV7Z1HMX'});
  assert.throws(() => s.run('uploadTestReport()'), /partial file/);
  assert.match(s.uploads[0].errors.join(' '), /measurement ID/);
  assert.ok(!s.calls.some(c => c.includes('analyticsdata.googleapis.com')));
  assert.throws(() => s.run('installWeeklySchedule()'), /uploadTestReport/);
});

test('a new failed test revokes a previously successful test gate', () => {
  const s = setup({gaFailure:true});
  s.run("PropertiesService.getUserProperties().setProperty('successfulGithubTest', JSON.stringify(CONFIG))");
  assert.throws(() => s.run('uploadTestReport()'), /partial file/);
  assert.match(s.uploads[0].errors.join(' '), /GA4 HTTP 403/);
  assert.throws(() => s.run('installWeeklySchedule()'), /uploadTestReport/);
  assert.doesNotMatch(JSON.stringify(s.uploads), /SECRET/);
});

test('contact ISO dates count by Paris date; TEST rows and personal fields never leave the sheet', () => {
  const s = setup({rows:[
    ['2026-10-04T22:30:00.000Z','/fr/contact/','Private Person','private@example.com','Confidential project','yes'],
    ['2026-10-05T09:00:00.000Z','/fr/contact/','TEST-Preview','test@example.com','Private test','yes'],
    ['2026-10-05T10:00:00.000Z','/fr/contact/?email=private@example.com','Another Person','private@example.com','Private project','']
  ]});
  s.script.set('LEAD_SHEET_IDS','FAKE-SHEET');
  const result = s.run("leads_({week:{start:'2026-10-05',end:'2026-10-05'}})");
  assert.equal(result[0].periods.week.leads, 2);
  assert.equal(result[0].periods.week.qualified, 1);
  assert.equal(result[0].periods.week.byRef['/fr/contact/'], 1);
  assert.equal(result[0].periods.week.byRef['(unknown)'], 1);
  assert.doesNotMatch(JSON.stringify(result), /Person|example.com|Confidential|project|TEST-/);
});

test('unreadable contact dates fail instead of reporting false zero counts', () => {
  const s = setup({rows:[['bad date','/fr/contact/','Private Person','private@example.com','Confidential','']]});
  s.script.set('LEAD_SHEET_IDS','FAKE-SHEET');
  assert.throws(() => s.run("leads_({week:{start:'2026-10-05',end:'2026-10-05'}})"), /invalid timestamp/);
});

test('explicit summary migration never reads or adds legacy rows, and records the new meaning', () => {
  const s = setup();
  s.script.set('LEAD_SHEET_IDS','FAKE-SHEET');
  s.script.set('CONTACT_LEADS_SOURCE','retained-contact-files-v1');
  s.script.set('CONTACT_SUMMARY_ID','FAKE-SUMMARY');
  s.script.set('CONTACT_SUMMARY_MAX_AGE_SECONDS','3600');
  const result = s.run("collectLeads_({week:{start:'2026-10-05',end:'2026-10-05'}}, [])");
  assert.equal(result.length,1); assert.equal(result[0].periods.week.leads,2);
  assert.equal(result[0].periods.week.qualified,null);
  assert.ok(!s.calls.some(url => url.includes('FAKE-SHEET')));
  s.run('uploadTestReport()');
  assert.equal(s.uploads[0].schemaVersion,5);
  assert.equal(s.uploads[0].data.leads[0].source,'retained-contact-files-v1');
  assert.match(s.uploads[0].limits.leads,/Deletion reduces historical counts/);
  assert.ok(s.uploads[0].notes.some(note => /not lifetime submissions/.test(note)));
});

test('summary failure is reported as unavailable without falling back to a configured legacy sheet', () => {
  const s = setup({summaryStatus:'unavailable'});
  s.script.set('LEAD_SHEET_IDS','FAKE-SHEET');
  s.script.set('CONTACT_LEADS_SOURCE','retained-contact-files-v1');
  s.script.set('CONTACT_SUMMARY_ID','FAKE-SUMMARY');
  s.script.set('CONTACT_SUMMARY_MAX_AGE_SECONDS','3600');
  const report = s.run("collect_('2026-10-07')");
  assert.equal(report.data.leads,undefined);
  assert.match(report.errors.join(' '),/Contact summary unavailable/);
  assert.ok(!s.calls.some(url => url.includes('FAKE-SHEET')));
  s.script.set('CONTACT_LEADS_SOURCE','unknown');
  const reads = s.calls.length;
  assert.throws(() => s.run('collectLeads_({}, [])'),/Unknown CONTACT_LEADS_SOURCE/);
  assert.equal(s.calls.length,reads);
});
