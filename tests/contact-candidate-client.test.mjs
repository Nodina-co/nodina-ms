import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {randomUUID} from 'node:crypto';

const source=readFileSync(new URL('../tools/forms/candidate/client.js',import.meta.url),'utf8');
const receipt={request_id:'00000000-0000-4000-8000-000000000001',token:'v1.00000000-0000-4000-8000-000000000001.1791309600.1791396000.en.'+'s'.repeat(43)};
function fixture(responses,{ready=true,valid=true}={}) {
  const fields=Object.fromEntries(['started_at','request_id','receipt_token','ref','utm_source','utm_medium','utm_campaign'].map(k=>[k,{value:''}]));
  const status={dataset:{},hidden:true,focus(){}},button={disabled:false,textContent:'Send'};
  const calls=[],events=[]; let submit;
  const form={dataset:{ready:String(ready),locale:'en'},action:'https://script.google.com/macros/s/fiction/exec',elements:{namedItem:key=>fields[key]},querySelector:s=>s==='.form-status'?status:button,reportValidity:()=>valid,addEventListener:(n,handler)=>{submit=handler;},setAttribute(){},removeAttribute(){},dispatchEvent:event=>events.push(event.type)};
  const context=vm.createContext({document:{querySelector:()=>form,referrer:'https://preview.example/en/vetting/?private=never-forward'},location:{origin:'https://preview.example',search:'?utm_source=fiction'},crypto:{randomUUID},URL,URLSearchParams,AbortSignal,CustomEvent:class{constructor(type){this.type=type;}},FormData:class{*[Symbol.iterator](){for(const [key,field]of Object.entries(fields))yield[key,field.value];}},fetch:async(url,options)=>{calls.push({url:String(url),options}); const next=responses.shift(); if(next instanceof Error)throw next; return {ok:true,json:async()=>next};}});
  vm.runInContext(source,context);
  return {form,fields,status,button,calls,events,submit:()=>submit({preventDefault(){}})};
}

test('candidate client obtains one server reference, reuses it after lost responses, and confirms only acknowledged receipt',async()=>{
  const f=fixture([receipt,new Error('network'),{ok:true}]);
  await f.submit(); assert.equal(f.events.length,0); assert.equal(f.button.disabled,false);
  await f.submit(); await f.submit();
  assert.equal(f.calls.length,3); assert.match(f.calls[0].url,/mode=token/);
  assert.equal(f.calls[0].options.cache,'no-store');
  assert.equal(f.calls[1].options.body.get('receipt_token'),receipt.token);
  assert.equal(f.calls[2].options.body.get('receipt_token'),receipt.token);
  assert.equal(f.calls[1].options.body.get('request_id'),receipt.request_id);
  assert.equal(f.calls[1].options.body.get('ref'),'/en/vetting/');
  assert.equal(f.calls[1].options.body.get('utm_source'),'fiction');
  assert.deepEqual(f.events,['nodina:contact-recorded']); assert.equal(f.form.dataset.sent,'true');
});

test('a refused or expired receipt never triggers automatic renewal or a success event',async()=>{
  const f=fixture([receipt,{ok:false,code:'invalid'},{ok:false,code:'invalid'}]);
  await f.submit(); await f.submit();
  assert.equal(f.calls.filter(c=>c.options.method==='POST').length,2);
  assert.equal(f.calls.filter(c=>!c.options.method).length,1);
  assert.equal(f.events.length,0); assert.equal(f.status.dataset.error,'true');
  assert.equal(f.calls[1].options.body.get('receipt_token'),f.calls[2].options.body.get('receipt_token'));
});

test('missing configuration, invalid form, wrong endpoint and malformed token cannot send a POST',async()=>{
  for(const options of [{ready:false},{valid:false}]){const f=fixture([],options);await f.submit();assert.equal(f.calls.length,0);}
  const wrong=fixture([]);wrong.form.action='https://other.example/';await wrong.submit();assert.equal(wrong.calls.length,0);
  for(const invalid of [{},{...receipt,request_id:randomUUID()},{...receipt,token:receipt.token.replace('.en.','.fr.') }]) {
    const f=fixture([invalid]);await f.submit(); assert.equal(f.calls.length,1);assert.equal(f.events.length,0);
  }
});
