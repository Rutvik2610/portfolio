import assert from 'node:assert/strict';
import {createServer} from 'vite';
import {renderToStaticMarkup} from 'react-dom/server';
import {createElement} from 'react';
const server=await createServer({server:{middlewareMode:true},appType:'custom'});
try{
const {default:App}=await server.ssrLoadModule('/src/App.tsx');
const {projects}=await server.ssrLoadModule('/src/data/projects.ts');
const {profile,assetUrl}=await server.ssrLoadModule('/src/data/profile.ts');
let html=renderToStaticMarkup(createElement(App));
const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
for(const [,hash] of html.matchAll(/href="#([^"]*)"/g))if(hash)assert(ids.has(hash),`Broken anchor: ${hash}`);
for(const p of projects)assert(!html.includes(p.name),'Hidden project leaked');
assert(!html.includes('mailto:'),'Missing email should not render');
assert(!html.includes('href="https://'),'No fabricated external links');
assert(html.includes('resume-dialog')&&!html.includes('.pdf"'),'Missing resume fallback');
assert(html.includes('aria-expanded="false"'),'Mobile menu semantics');
projects[0].visible=true;projects[0].status='Draft';
html=renderToStaticMarkup(createElement(App));assert(html.includes(projects[0].name)&&html.includes('Draft'),'Enabled project must render with status');projects[0].visible=false;
profile.resume.available=true;html=renderToStaticMarkup(createElement(App));assert(html.includes(assetUrl(profile.resume.path))&&html.includes('download=""'),'Available resume must download');
console.log('PASS: rendered internal anchors, hidden/enabled projects, visible status, missing contact links, resume fallback/download, mobile menu semantics.');
}finally{await server.close()}
