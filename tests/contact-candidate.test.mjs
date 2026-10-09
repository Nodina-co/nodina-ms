import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHmac, randomUUID} from 'node:crypto';
import vm from 'node:vm';
import {buildProductionSource} from '../tools/forms/production/build.mjs';

const files = ['core.gs', 'google.gs', 'web.gs', 'reporting-reader.gs'];
const sources = files.map(name => readFileSync(new URL('../tools/forms/candidate/' + name, import.meta.url), 'utf8'));
const copy = value => JSON.parse(JSON.stringify(value));
const owner = 'jd@nodina.com';
const now = Date.parse('2026-10-06T18:00:00.000Z');

function fixture(profile = 'rehearsal') {
  let clock = now, sequence = 0, version = 0, locked = false;
  const properties = new Map([
    ['ND_MODE', profile], ['ND_OWNER_EMAIL', owner], ['ND_TOKEN_TTL_SECONDS', '86400'],
    ['ND_FOLDER_ID', 'folder'], ['ND_SUMMARY_ID', 'summary'], ['ND_SIGNING_KEY', 'fictional-test-key-'.repeat(5)],
  ]);
  const permissions = [{id: 'owner', type: 'user', role: 'owner', emailAddress: owner}];
  const driveFiles = new Map(), sheets = new Map(), messages = [], calls = [];
  const faults = {};
  function fail(key) { if (faults[key]) { faults[key]--; throw new Error('Google error PRIVATE-VISITOR SECRET'); } }
  function file(id, kind, mimeType, extra = {}) {
    return {id, name: kind, mimeType, trashed: false, owners: [{emailAddress: owner}], parents: [], permissions: copy(permissions), appProperties: {nd_schema: profile === 'production' ? 'nodina-production-contact-file-v1' : 'nodina-contact-file-v1', nd_kind: kind}, modifiedTime: String(++version), ...extra};
  }
  driveFiles.set('folder', file('folder', 'requests', 'application/vnd.google-apps.folder'));
  driveFiles.set('summary', file('summary', 'summary', 'application/vnd.google-apps.spreadsheet'));
  sheets.set('summary', {tabs: [{properties: {sheetId: 0, title: 'Snapshot'}}, {properties: {sheetId: 20261006, title: 'Counts'}}], values: {'Snapshot!A1:D2': [['schema','status','computed_at','generation'], ['nodina-counts-v1','unavailable',new Date(now).toISOString(),'old']], 'Counts!A1:C10001': [['day','ref','leads']]}});
  const props = {
    getProperty: k => properties.get(k) || null,
    setProperty: (k,v) => { fail('property'); properties.set(k,v); return props; },
    deleteProperty: k => properties.delete(k),
    getProperties: () => Object.fromEntries(properties),
  };
  function updateRange(id, range, values, raw) {
    calls.push({kind: 'write', id, range, raw, values: copy(values)});
    fail('writeBefore');
    const s = sheets.get(id);
    if (range === 'Contact!Q2') s.values['Contact!A1:Q2'][1][16] = values[0][0];
    else if (range === 'Snapshot!A2:D2') s.values['Snapshot!A1:D2'][1] = copy(values[0]);
    else s.values[range] = copy(values);
    driveFiles.get(id).modifiedTime = String(++version);
    fail('writeAfter');
  }
  function getRange(id, range) {
    fail('read'); const s = sheets.get(id);
    if (!s) throw new Error('404');
    if (range === 'Contact!Q2') return {values: [[s.values['Contact!A1:Q2']?.[1]?.[16]]]};
    if (range === 'Contact!A1:E2') return {values: s.values['Contact!A1:Q2']?.map(r => r.slice(0,5)) || []};
    return {values: copy(s.values[range] || [])};
  }
  class Clock extends Date { constructor(...args) { super(...(args.length ? args : [clock])); } static now() { return clock; } }
  const context = vm.createContext({
    Date: Clock,
    PropertiesService: {getScriptProperties: () => props},
    LockService: {getScriptLock: () => ({tryLock() { if (locked) return false; locked = true; return true; }, releaseLock() { locked = false; }})},
    Utilities: {getUuid: randomUUID, Charset: {UTF_8: 'utf8'},
      computeHmacSha256Signature: (text,key) => [...createHmac('sha256',key).update(text).digest()],
      base64EncodeWebSafe: bytes => Buffer.from(bytes).toString('base64url'),
      formatDate: (date,zone) => new Intl.DateTimeFormat('en-CA',{timeZone: zone,year:'numeric',month:'2-digit',day:'2-digit'}).format(date)},
    MailApp: {getRemainingDailyQuota: () => faults.quotaZero ? 0 : 10, sendEmail(message) { messages.push(copy(message)); fail('mailAfter'); }},
    ScriptApp: {getService: () => ({getUrl: () => 'https://script.google.com/macros/s/fictional/exec'})},
    HtmlService: {createHtmlOutput: html => ({setTitle: () => html})},
    ContentService: {MimeType: {JSON: 'json'},createTextOutput: text => ({setMimeType: () => JSON.parse(text)})},
    Drive: {
      Files: {
        get(id) { calls.push({kind:'get',id}); const f = driveFiles.get(id); if (!f) throw new Error('404 PRIVATE-VISITOR'); return copy(f); },
        create(body) {
          calls.push({kind:'create',body:copy(body)}); fail('createBefore');
          const id = 'file' + ++sequence;
          driveFiles.set(id, file(id,body.appProperties.nd_kind,body.mimeType,{...copy(body),id}));
          sheets.set(id,{tabs:[{properties:{sheetId:0,title:'Sheet1'}}],values:{}});
          fail('createAfter'); return {id};
        },
        update(body,id) { fail('completeBefore'); Object.assign(driveFiles.get(id).appProperties,body.appProperties); driveFiles.get(id).modifiedTime = String(++version); fail('completeAfter'); return {id}; },
        list(options) {
          calls.push({kind:'list',options:copy(options)}); fail('list');
          const uuid = /key='request_id' and value='([^']+)'/.exec(options.q)?.[1];
          const matches = [...driveFiles.values()].filter(f => f.appProperties.nd_kind === 'request' && f.parents.includes('folder') && (!uuid || f.appProperties.request_id === uuid) && (!options.q.includes('trashed = false') || !f.trashed));
          const start = Number(options.pageToken || 0), size = faults.pageSize || options.pageSize;
          return {files: matches.slice(start,start+size).map(f => ({id:f.id})), ...(start+size < matches.length ? {nextPageToken:String(start+size)} : {}), incompleteSearch: !!faults.incompleteSearch};
        },
      },
      Permissions: {list(id) { return {permissions:copy(driveFiles.get(id).permissions)}; }},
    },
    Sheets: {Spreadsheets: {
      get(id) { return {sheets:copy(sheets.get(id).tabs)}; },
      Values: {
        get: getRange,
        update(body,id,range,options) { updateRange(id,range,body.values,options.valueInputOption); return {}; },
        batchUpdate(body,id) { body.data.forEach(d => updateRange(id,d.range,d.values,body.valueInputOption)); return {}; },
      },
      batchUpdate(body,id) {
        const s = sheets.get(id);
        for (const request of body.requests) {
          if (request.updateSheetProperties) { const p = request.updateSheetProperties.properties; Object.assign(s.tabs.find(t => t.properties.sheetId === p.sheetId).properties,copy(p)); }
          if (request.addSheet) s.tabs.push(copy(request.addSheet));
          if (request.repeatCell) s.values['Counts!A1:C10001'] = [];
          if (request.updateCells) {
            const v = request.updateCells.rows.map(row => row.values.map(cell => cell.userEnteredValue.stringValue ?? cell.userEnteredValue.numberValue));
            if (request.updateCells.start.sheetId === 20261006) s.values['Counts!A1:C10001'] = v;
            else s.values['Snapshot!A1:D2'][1] = v[0];
          }
        }
        driveFiles.get(id).modifiedTime = String(++version);
        return {};
      },
    }},
  });
  const profileSources = profile === 'production' ? [buildProductionSource(sources.slice(0,3).join('\n')), sources[3]] : sources;
  profileSources.forEach(source => vm.runInContext(source,context));
  function issue(locale = 'fr') { return copy(context.ndIssue_(locale,clock,86400,context.ndCrypto_(context.ndSettings_(true)))); }
  function params(receipt = issue(), changes = {}) { return {name:'TEST-Élodie',email:'fiction@example.com',organization:'Fiction',project:'Un contexte entièrement fictif.',timing:'',offer:'teams',locale:receipt.token.split('.')[4],consent:'yes',consent_version:'contact-v1',request_id:receipt.request_id,receipt_token:receipt.token,ref:'/fr/contact/',...changes}; }
  function validation(p) { return context.ndValidate_(p,clock,context.ndCrypto_(context.ndSettings_(true))); }
  function record(p) { return context.ndRecord_(validation(p),context.ndDependencies_(context.ndSettings_(true))); }
  function post(p) { return context.doPost({parameter:{...p,response_format:'json'},contentLength:1000,postData:{type:'application/x-www-form-urlencoded'}}); }
  function requestFiles() { return [...driveFiles.values()].filter(f => f.appProperties.nd_kind === 'request'); }
  return {context,properties,driveFiles,sheets,messages,calls,faults,issue,params,validation,record,post,requestFiles,advance:ms=>{clock+=ms;},time:()=>clock};
}

test('server references bind UUID, locale and expiry; forged, future and expired tokens never reach storage', () => {
  const f = fixture(), receipt = f.issue(), p = f.params(receipt);
  assert.equal(f.validation(p).ok,true);
  const changedExpiry=receipt.token.split('.'); changedExpiry[3]=String(Number(changedExpiry[3])+1);
  for (const change of [{request_id:randomUUID()},{locale:'en'},{receipt_token:receipt.token.slice(0,-1)+'!'},{receipt_token:receipt.token.replace('v1.','v2.')},{receipt_token:changedExpiry.join('.')},{consent:''},{consent_version:'v0'},{email:'x@y.com\nBcc:other'},{project:'x'.repeat(5001)},{website:'spam'},{offer:'delete'}]) assert.equal(f.validation({...p,...change}).ok,false,JSON.stringify(change));
  assert.equal(f.requestFiles().length,0);
  f.advance(86400000);
  assert.equal(f.validation(p).ok,false);
  const future = f.params(); f.advance(-1000);
  assert.equal(f.validation(future).ok,false);
});

test('one private file contains the consent; retries send one minimal notification with no reply-to', () => {
  const f = fixture(), p = f.params();
  assert.equal(f.record(p).ok,true); assert.equal(f.record(p).ok,true);
  const file = f.requestFiles()[0], row = f.sheets.get(file.id).values['Contact!A1:Q2'][1];
  assert.equal(f.requestFiles().length,1); assert.equal(f.messages.length,1);
  assert.equal(row[10],f.context.ND_CONSENT.fr); assert.equal(row[12],row[0]); assert.equal(row[16],'sent');
  assert.deepEqual(file.parents,['folder']);
  assert.equal(file.appProperties.receipt_state,'complete');
  assert.doesNotMatch(JSON.stringify(f.messages), /Élodie|fiction@example|entièrement|replyTo/);
  assert.ok(f.messages[0].body.includes(file.id));
  assert.equal([...f.properties.keys()].filter(k=>k.startsWith('ND_OP_')).length,0);
  assert.equal(f.record({...p,project:'Contenu différent, encore fictif.'}).code,'invalid');
  assert.equal(f.messages.length,1);
});

test('creation completed but response lost is recovered by exact metadata without making another file', () => {
  const f = fixture(), p = f.params(); f.faults.createAfter=1;
  assert.throws(()=>f.record(p));
  assert.equal(f.requestFiles().length,1); assert.equal(f.messages.length,0);
  assert.equal(f.record(p).ok,true); assert.equal(f.requestFiles().length,1); assert.equal(f.messages.length,1);
});

test('uncertain creation with no discoverable file stays blocked, including on retries', () => {
  const f = fixture(), p = f.params(); f.faults.createBefore=1;
  assert.throws(()=>f.record(p)); assert.throws(()=>f.record(p),/uncertain/);
  assert.equal(f.calls.filter(c=>c.kind==='create').length,1);
  assert.equal(f.requestFiles().length,0); assert.equal(f.messages.length,0);
  const op = JSON.parse(f.properties.get('ND_OP_'+p.request_id));
  assert.equal(op.kind,'creating'); assert.doesNotMatch(JSON.stringify(op),/Élodie|fiction@example|entièrement/);
});

test('interrupted writes and completion flags resume the same file with the original receipt time', () => {
  for (const fault of ['writeAfter','completeBefore','completeAfter']) {
    const f = fixture(), p = f.params();
    // Skip summary invalidation so writeAfter targets the dossier itself.
    if (fault==='writeAfter') {
      const original=f.context.ndInvalidateSummary_; f.context.ndInvalidateSummary_=()=>{};
      f.faults[fault]=1;
      assert.throws(()=>f.record(p)); f.context.ndInvalidateSummary_=original;
    } else { f.faults[fault]=1; assert.throws(()=>f.record(p)); }
    assert.equal(f.requestFiles().length,1); assert.equal(f.messages.length,0);
    f.advance(5000); assert.equal(f.record(p).ok,true);
    assert.equal(f.requestFiles().length,1); assert.equal(f.messages.length,1);
    assert.equal(f.sheets.get(f.requestFiles()[0].id).values['Contact!A1:Q2'][1][0],new Date(now).toISOString());
  }
});

test('an ambiguous mail result cannot cause a second notification; exhausted quota retains failed', () => {
  const f = fixture(), p = f.params(); f.faults.mailAfter=1;
  assert.equal(f.record(p).ok,true); assert.equal(f.record(p).ok,true);
  assert.equal(f.messages.length,1);
  assert.equal(f.sheets.get(f.requestFiles()[0].id).values['Contact!A1:Q2'][1][16],'unknown');
  const q=fixture(); q.faults.quotaZero=true; assert.equal(q.record(q.params()).ok,true);
  assert.equal(q.messages.length,0); assert.equal(q.sheets.get(q.requestFiles()[0].id).values['Contact!A1:Q2'][1][16],'failed');
});

test('retirement blocks replay before manual deletion, after deletion and after the marker expires', () => {
  const f=fixture(), p=f.params(); f.record(p);
  const id=f.requestFiles()[0].id;
  f.properties.set('ND_REVIEW_FILE_ID',id); f.properties.set('ND_REVIEW_REQUEST_ID',p.request_id);
  assert.equal(f.context.ndPrepareRetirement_().prepared,true);
  assert.equal(f.record(p).code,'invalid');
  // This is deletion of a local fake Map entry, not a Google operation.
  f.driveFiles.delete(id); f.sheets.delete(id);
  assert.equal(f.record(p).code,'invalid'); assert.equal(f.requestFiles().length,0);
  f.advance(86400000); assert.equal(f.context.ndClearExpiredRetirements_().removed,1);
  assert.equal(f.validation(p).ok,false); assert.equal(f.post(p).code,'invalid');
  assert.equal(f.requestFiles().length,0); assert.equal(f.messages.length,1);
});

test('retirement preparation rejects another UUID and shared file; it never deletes another dossier', () => {
  const f=fixture(), a=f.params(), b=f.params(); f.record(a); f.record(b);
  const id=f.requestFiles()[0].id;
  f.properties.set('ND_REVIEW_FILE_ID',id); f.properties.set('ND_REVIEW_REQUEST_ID',b.request_id);
  assert.throws(()=>f.context.ndPrepareRetirement_(),/scope/);
  f.properties.set('ND_REVIEW_REQUEST_ID',a.request_id);
  f.driveFiles.get(id).permissions.push({type:'anyone',role:'reader'});
  assert.throws(()=>f.context.ndPrepareRetirement_(),/sharing/);
  assert.equal(f.requestFiles().length,2);
});

test('shared parent, a shared new file and duplicate metadata fail closed before sending mail', () => {
  const f=fixture(); f.driveFiles.get('folder').permissions.push({type:'domain',role:'reader',domain:'example.com'});
  assert.throws(()=>f.record(f.params()),/sharing/); assert.equal(f.requestFiles().length,0);
  const g=fixture(), p=g.params(); g.faults.createAfter=1; assert.throws(()=>g.record(p));
  g.driveFiles.get(g.requestFiles()[0].id).permissions.push({type:'anyone',role:'reader'});
  assert.throws(()=>g.record(p),/sharing/); assert.equal(g.messages.length,0);
  assert.equal(g.calls.some(c=>c.kind==='write'&&c.range.startsWith('Contact!')),false);
  const h=fixture(), hp=h.params(); h.record(hp);
  const duplicate=copy(h.requestFiles()[0]); duplicate.id='duplicate'; h.driveFiles.set('duplicate',duplicate);
  assert.throws(()=>h.record(hp),/ambiguous/); assert.equal(h.messages.length,1);
});

test('Drive pagination is complete; repeated tokens, incomplete searches and operation overflow are errors', () => {
  const f=fixture(); f.record(f.params()); f.record(f.params()); f.faults.pageSize=1;
  assert.equal(f.context.ndList_(f.context.ndSettings_(true),null,true).length,2);
  assert.throws(()=>f.context.ndAllPages_(()=>({items:[],nextPageToken:'repeat'})),/pagination/);
  f.faults.incompleteSearch=true; assert.throws(()=>f.record(f.params()),/coverage/);
  const g=fixture(); for(let i=0;i<100;i++) g.properties.set('ND_OP_'+randomUUID(),JSON.stringify({kind:'creating'}));
  assert.throws(()=>g.record(g.params()),/limit/); assert.equal(g.requestFiles().length,0);
});

test('user formula-looking input is RAW while the sole conservation formula is developer controlled', () => {
  const f=fixture(), p=f.params(undefined,{name:'TEST-=SUM(1)',organization:'=IMPORTXML("https://example.com")',project:'=IMPORTXML("https://example.com/private")'});
  f.record(p);
  const writes=f.calls.filter(c=>c.kind==='write'&&c.range.startsWith('Contact!'));
  assert.ok(writes.every(c=>c.raw==='RAW'));
  const formula=f.calls.find(c=>c.kind==='write'&&c.range==='Conservation!D2');
  assert.equal(formula.raw,'USER_ENTERED'); assert.doesNotMatch(formula.values[0][0],/example\.com/);
  // Google parses USER_ENTERED formulas using the explicitly configured locale.
  assert.match(sources[1], /locale: 'fr_FR'/);
  assert.equal(formula.values[0][0], '=IF(AND(B2="Sans suite";ISNUMBER(C2);C2>0;C2<=TODAY());EDATE(C2;12);"")');
});

test('public handlers are rehearsal-only, sanitize errors and never route a deletion or recipient', () => {
  const f=fixture(); assert.equal(f.post(f.params(undefined,{name:'Real person'})).code,'invalid');
  assert.equal(f.requestFiles().length,0);
  f.faults.list=1;
  const result=f.post(f.params(undefined,{action:'delete',file_id:'folder',recipient:'other@example.com'}));
  assert.deepEqual(copy(result),{ok:false,code:'unavailable'}); assert.doesNotMatch(JSON.stringify(result),/PRIVATE|SECRET|file_id/);
  assert.equal(f.requestFiles().length,0);
  const fresh=f.params(); f.properties.set('ND_MODE','production'); assert.equal(f.post(fresh).code,'unavailable');
});

test('server-rendered FR/EN form works with plain POST, signed tokens and no scripts', () => {
  for (const locale of ['fr','en']) {
    const f=fixture(); const html=f.context.doGet({parameter:{locale}});
    assert.match(html,/method="post" target="_top"/); assert.doesNotMatch(html,/<script/);
    assert.match(html,new RegExp('lang="'+locale+'"')); assert.match(html,/name="consent" value="yes" required/);
    const token=/name="receipt_token" value="([^"]+)"/.exec(html)[1], id=/name="request_id" value="([^"]+)"/.exec(html)[1];
    assert.equal(f.post(f.params({token,request_id:id})).ok,true);
    const hostile=f.context.ndResult_({ok:false,error:'PRIVATE-VISITOR'},{locale:'<script>',name:'<img>'});
    assert.doesNotMatch(hostile,/PRIVATE|<script|<img/);
  }
});

test('hosted form accepts Google standard and NODINA Workspace URLs, including private editor preview', () => {
  const endpoints = [
    'https://script.google.com/macros/s/fictional/exec',
    'https://script.google.com/macros/s/fictional/dev',
    'https://script.google.com/a/macros/nodina.com/s/fictional/exec',
    'https://script.google.com/a/nodina.com/macros/s/fictional/exec',
    'https://script.google.com/a/nodina.com/macros/s/fictional/dev',
  ];
  for (const endpoint of endpoints) {
    const f = fixture(); f.context.ScriptApp.getService = () => ({getUrl: () => endpoint});
    for (const locale of ['fr', 'en']) {
      const html = f.context.doGet({parameter: {locale}});
      assert.match(html, /<form method="post" target="_top"/);
      assert.ok(html.includes('action="' + endpoint + '"'));
      assert.match(html, new RegExp('lang="' + locale + '"'));
      assert.doesNotMatch(html, /<script/);
    }
    assert.equal(f.requestFiles().length, 0); assert.equal(f.messages.length, 0);
  }
  for (const endpoint of [
    'http://script.google.com/macros/s/fictional/exec',
    'https://script.google.com.evil.example/macros/s/fictional/exec',
    'https://script.google.com/a/other.example/macros/s/fictional/exec',
    'https://script.google.com/macros/s/fictional/exec?next=other',
    'https://script.google.com/macros/s/fictional/exec#fragment',
    'https://script.google.com/macros/s/fictional%2Fother/exec',
    'https://script.google.com/macros/s/fictional/exec"><script>',
  ]) assert.throws(() => fixture().context.ndHostedForm_('fr', {}, endpoint), /endpoint/);
});

test('aggregate snapshots exclude TEST, use Paris calendar days and shrink after a fake-file removal', () => {
  const f=fixture(), p=f.params(undefined,{name:'Fiction A'}), b=f.params(undefined,{name:'Fiction B'});
  f.record(p); f.record(b); f.record(f.params());
  f.faults.pageSize=1; f.context.ndRebuildSummary_();
  let rows=f.sheets.get('summary').values['Counts!A1:C10001'];
  assert.deepEqual(copy(rows),[['day','ref','leads'],['2026-10-06','/fr/contact/',2]]);
  assert.doesNotMatch(JSON.stringify(rows),/Fiction|example|[a-f0-9]{8}-|file\d/);
  const id=f.requestFiles()[0].id; f.properties.set('ND_REVIEW_FILE_ID',id); f.properties.set('ND_REVIEW_REQUEST_ID',p.request_id);
  f.context.ndPrepareRetirement_(); assert.throws(()=>f.context.ndRebuildSummary_(),/coverage/);
  assert.equal(f.sheets.get('summary').values['Snapshot!A1:D2'][1][1],'unavailable');
  f.driveFiles.delete(id); f.sheets.delete(id); f.context.ndRebuildSummary_();
  assert.deepEqual(copy(f.sheets.get('summary').values['Counts!A1:C10001']),[['day','ref','leads'],['2026-10-06','/fr/contact/',1]]);
  assert.equal(f.context.ndDependencies_(f.context.ndSettings_(true)).day('2026-10-24T22:30:00.000Z'),'2026-10-25');
});

test('missing or malformed receipt makes summary unavailable, never a partial or measured zero', () => {
  const f=fixture(), p=f.params(undefined,{name:'Fiction'}); f.record(p);
  const s=f.sheets.get(f.requestFiles()[0].id);
  s.values['Contact!A1:Q2'][1][0]='2026-02-30T00:00:00.000Z';
  assert.throws(()=>f.context.ndRebuildSummary_(),/schema/);
  assert.equal(f.sheets.get('summary').values['Snapshot!A1:D2'][1][1],'unavailable');
});

test('reader rejects stale, torn, unbounded or visitor-bearing summaries, and reports qualification as null', () => {
  const f=fixture(), periods={current:{start:'2026-10-01',end:'2026-10-06'}};
  const meta=[['schema','status','computed_at','generation'],['nodina-counts-v1','complete',new Date(now).toISOString(),'generation']];
  const rows=[['day','ref','leads'],['2026-10-06','/fr/contact/',2]];
  const read=(before=meta,values=rows,after=before,time=now)=>f.context.ndParseCounts_(before,values,after,periods,time,86400);
  assert.equal(read()[0].periods.current.leads,2); assert.equal(read()[0].periods.current.qualified,null);
  assert.equal(read(meta,[rows[0]])[0].periods.current.leads,0);
  const offerRefs=['/fr/solutions-ia-sur-mesure/','/fr/equipes-ai-native/','/en/custom-ai-solutions/','/en/ai-native-teams/'];
  const attributed=read(meta,[rows[0],...offerRefs.map(ref=>['2026-10-06',ref,1]),['2026-10-06','/fr/private-customer/',1]])[0].periods.current;
  assert.equal(attributed.leads,5);
  for (const ref of offerRefs) assert.equal(attributed.byRef[ref],1);
  assert.equal(attributed.byRef['(unknown)'],1);
  assert.equal(attributed.byRef['/fr/private-customer/'],undefined);

  assert.throws(()=>read(meta,rows,meta,now+86400001),/stale/);
  const changed=copy(meta); changed[1][3]='new'; assert.throws(()=>read(meta,rows,changed),/unavailable/);
  for (const row of [['2026-10-06','visitor@example.com',1],['2026-02-30','/fr/',1],['2026-10-06','/fr/',-1],['2026-10-06','/fr/',1,'private'],['2026-10-06','/fr/',1.5]]) assert.throws(()=>read(meta,[rows[0],row]),/schema/);
  assert.throws(()=>read(meta,[...rows,rows[1]]),/schema/);
});

test('Reporting adapter reads bounded raw counts between matching snapshots with no fallback', () => {
  const f = fixture(), periods = {current: {start: '2026-10-01', end: '2026-10-06'}};
  const meta = [['schema','status','computed_at','generation'], ['nodina-counts-v1','complete',new Date(now).toISOString(),'generation']];
  const values = [['day','ref','leads'], ['2026-10-06','/fr/contact/',2]];
  const requests = [];
  f.context.api_ = (source, url) => {
    const parsed = new URL(url);
    assert.equal(source, 'Contact summary');
    assert.equal(parsed.origin, 'https://sheets.googleapis.com');
    assert.equal(parsed.searchParams.get('valueRenderOption'), 'UNFORMATTED_VALUE');
    const range = decodeURIComponent(parsed.pathname.split('/values/')[1]);
    requests.push(range);
    return {values: copy(range.startsWith('Snapshot!') ? meta : values)};
  };
  const result = f.context.ndReadCounts_(periods, 'summary', 3600);
  assert.deepEqual(requests, ['Snapshot!A1:D2','Counts!A1:C10001','Snapshot!A1:D2']);
  assert.equal(result[0].source, 'retained-contact-files-v1');
  assert.equal(result[0].periods.current.leads, 2);
  assert.equal(result[0].periods.current.qualified, null);
  assert.equal(f.calls.length, 0); assert.equal(f.messages.length, 0);
  for (const [id, age] of [['summary/other',3600],['',3600],['summary',0],['summary',86401],['summary','3600']]) {
    assert.throws(() => f.context.ndReadCounts_(periods,id,age), /configuration/);
  }
  f.context.api_ = () => { throw new Error('Contact summary HTTP 403'); };
  assert.throws(() => f.context.ndReadCounts_(periods,'summary',3600), /403/);
});

test('separate production profile accepts ordinary requests with the same private storage and rejects rehearsal mode', () => {
  const f = fixture('production'), p = f.params(undefined,{name:'Fictional ordinary request'});
  assert.equal(f.post(p).ok,true); assert.equal(f.post(p).ok,true);
  assert.equal(f.requestFiles().length,1); assert.equal(f.messages.length,1);
  assert.equal(f.messages[0].to,owner);
  assert.doesNotMatch(f.messages[0].body,/Fictional ordinary|example.com/);
  f.context.ndRebuildSummary_();
  assert.equal(f.sheets.get('summary').values['Counts!A1:C10001'][1][2],1);
  const fresh = f.params(); f.properties.set('ND_MODE','rehearsal');
  assert.equal(f.post(fresh).code,'unavailable');
  const wrongStore = fixture('production');
  wrongStore.driveFiles.get('folder').appProperties.nd_schema = 'nodina-contact-file-v1';
  assert.equal(wrongStore.post(wrongStore.params()).code,'unavailable');
  assert.equal(wrongStore.requestFiles().length,0); assert.equal(wrongStore.messages.length,0);
  for (const locale of ['fr','en']) {
    const html = fixture('production').context.doGet({parameter:{locale}});
    assert.doesNotMatch(html,/Private rehearsal|Recette privée/);
    assert.match(html,/name="receipt_token"/); assert.doesNotMatch(html,/<script/);
  }
  assert.throws(() => buildProductionSource(sources.slice(0,3).join('\n') + '\n'), /Candidate changed/);
  const publicFunctions = [...buildProductionSource(sources.slice(0,3).join('\n')).matchAll(/^function ([A-Za-z0-9_]+)\(/gm)].map(m=>m[1]).filter(name=>!name.endsWith('_'));
  assert.deepEqual(publicFunctions,['doGet','doPost']);
});

test('candidate deployment manifest keeps file access narrow and exposes no editor maintenance handler', () => {
  const manifest=JSON.parse(readFileSync(new URL('../tools/forms/candidate/appsscript.json',import.meta.url),'utf8'));
  assert.deepEqual(manifest.oauthScopes,['https://www.googleapis.com/auth/drive.file','https://www.googleapis.com/auth/script.send_mail']);
  assert.equal(manifest.exceptionLogging,'NONE');
  const publicFunctions=sources.flatMap(source=>[...source.matchAll(/^function ([A-Za-z0-9_]+)\(/gm)].map(match=>match[1])).filter(name=>!name.endsWith('_'));
  assert.deepEqual(publicFunctions,['doGet','doPost']);
});
