const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const ctx={};vm.createContext(ctx);vm.runInContext(fs.readFileSync('dist/content.js','utf8')+'\n'+fs.readFileSync('dist/extended.js','utf8')+'\n'+fs.readFileSync('dist/foundations.js','utf8')+'\n'+fs.readFileSync('dist/written.js','utf8')+';globalThis.course=units;',ctx);
const reference=require('./answer-key-reference.cjs');let count=0;for(const u of ctx.course){assert.equal(u.written.criteria.length,4);for(const l of ['id','en']){assert.ok(u.written.prompt[l]);assert.equal(u.written.steps[l].length,4);for(const c of u.written.criteria)assert.ok(c[l])}for(const s of u.subtopics||[u]){assert.equal(s.questions.length,3);for(const f of ['title','example','warning','visual'])for(const l of ['id','en'])assert.ok(s[f][l]);for(const c of s.theory)for(const l of ['id','en'])assert.ok(c[l]);for(const q of s.questions){assert.ok(q.options[q.correct]);for(const l of ['id','en']){assert.ok(q.prompt[l]);assert.ok(q.steps[l].length>=2);assert.ok(q.trap[l])}count++}}}assert.equal(count,111);for(const u of ctx.course)u.subtopics.forEach((s,si)=>s.questions.forEach((q,qi)=>{const o=q.options[q.correct];assert.equal(typeof o==='string'?o:o.en,reference[u.id][si][qi],u.id+'/'+si+'/'+qi+' answer mismatch')}));
const labs={num:x=>String(Number(x.toFixed(2))),fmt:x=>x<0?'('+x+')':String(x),t:(id,en)=>en,esc:String,slider:()=>'',graph:(curves,view,points,label)=>({curves,view,points,label})};vm.createContext(labs);vm.runInContext(fs.readFileSync('dist/labs.js','utf8')+'\n'+fs.readFileSync('dist/focus-labs.js','utf8')+';globalThis.run=extendedLab;globalThis.focus=foundationLab;',labs);
const view={xmin:-6,xmax:6,ymin:-6,ymax:6};const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-9,`${a} != ${b}`);let scenarios=0;
for(const m of [1,2])for(const t of [-2,0,1,2]){const x=labs.run('polynomial',0,{m,t},view);const f=x.figure.curves[0].fn;near(f(-2),0);near(f(1),0);assert.equal(Math.sign(f(.9)*f(1.1)),m===1?-1:1);scenarios++}
for(const a of [-2,-1,0,1,2]){const x=labs.run('rational',0,{h:a},view);const hole=x.figure.points[0];assert.ok(hole.open);near(hole.x,a);near(hole.y,2*a);assert.ok(x.figure.curves[0].breaks.includes(a));scenarios++}
for(const h of [-2,0,2])for(const v of [-2,0,2]){const x=labs.run('rational',1,{h,v},view);const c=x.figure.curves.find(c=>c.breaks);assert.ok(Number.isNaN(c.fn(h)));near(c.fn(h+1),v+1);assert.ok(c.breaks.includes(h));scenarios++}
for(const h of [-2,0,2])for(const c of [1,3]){const x=labs.run('modulus',1,{h,c},view);for(const p of x.figure.points)near(Math.abs(p.x-h),c);scenarios++}
for(const c of [-1,1,3])for(const t of [-1,0,1]){const x=labs.run('piecewise',0,{c,t},view);assert.ok(x.figure.points[0].open);assert.equal(x.figure.points[1].open,undefined);near(x.figure.points[1].y,c);near(x.figure.points[2].y,t<0?t+1:t*t+c);assert.ok(Number.isNaN(x.figure.curves[0].fn(0)));near(x.figure.curves[1].fn(0),c);scenarios++}
for(const a of [-2,.5,2])for(const b of [-2,.5,2]){const x=labs.run('transform',1,{a,b,h:1,k:-1,u:2},view);const p=x.figure.points[1];near(p.x,1+2/b);near(p.y,-1+2*a);near(x.figure.curves[1].fn(p.x),p.y);scenarios++}
for(const base of [.5,2,Math.E,10]){const log=labs.run('logarithm',0,{base,t:2},view).figure;const f=log.curves[2].fn,exp=log.curves[1].fn;near(f(1),0);assert.ok(Number.isNaN(f(0)));near(exp(f(2)),2);near(f(4),2*f(2));const ex=labs.run('exponential',0,{base,t:1},view).figure.curves[0].fn;near(ex(2)/ex(1),base);scenarios++}
for(const q of [.7,1.2,1.3]){const x=labs.run('modelling',0,{q,t:3},view);assert.equal(x.figure.points.length,9);for(const p of x.figure.points){assert.equal(p.x,Math.trunc(p.x));near(p.y,q**p.x)}scenarios++}
for(const k of [-.3,0,.3]){const x=labs.run('modelling',1,{k,t:3},view);near(x.figure.curves[0].fn(0),1);if(k<0)near(x.figure.curves[0].fn(-Math.log(2)/k),.5);if(k>0)near(x.figure.curves[0].fn(Math.log(2)/k),2);scenarios++}
// Independent algebra and admissibility checks for examples and harder answers.
for(const x of [-3,-1,0,2,4])near(x**3-2*x*x-5*x+6,(x-1)*(x-3)*(x+2));
for(const x of [-1/3,3])near(Math.abs(2*x-1),x+2);
for(const x of [0,2])near(4**x-5*2**x+4,0);
near(Math.log2(3-1)+Math.log2(3+1),3);assert.ok(-3-1<0);
assert.ok(100*1.2**2<150);assert.ok(100*1.2**3>=150);
assert.ok(Math.log(.5)/.2<0);
// Foundation graph boundary cases, including equality of endpoint heights.
for(const a of [-3,-2,-1,0])for(const b of [2,3,4])for(const ends of ['both','left','right','none']){const st={domainInterval:{a,b,ends}};const r=labs.focus('domain',2,st,view);const f=r.figure.curves[0].fn;const left=['both','left'].includes(ends),right=['both','right'].includes(ends);assert.equal(Number.isFinite(f(a)),left);assert.equal(Number.isFinite(f(b)),right);near(f(1),1);assert.equal(r.figure.points[0].open,!left);assert.equal(r.figure.points[1].open,!right);const max=Math.max((a-1)**2+1,(b-1)**2+1);const attained=(left&&(a-1)**2+1===max)||(right&&(b-1)**2+1===max);assert.ok(r.read.includes('Range=[1,'+max+(attained?']':')')));scenarios++}
for(const branch of ['negative','positive'])for(const z of [0,1,2]){const t=branch==='negative'?-z:z;const r=labs.focus('inverse',2,{inverseBranch:{branch,t}},view);const f=r.figure.curves[1].fn,g=r.figure.curves[2].fn;near(g(f(t)),t);assert.ok(Number.isNaN(g(-1)));scenarios++}
for(const order of ['fg','gf']){const r=labs.focus('composition',2,{compositionDomain:{order}},view),f=r.figure.curves[0].fn;assert.ok(Number.isNaN(f(order==='fg'?.9:-.1)));near(f(order==='fg'?1:0),order==='fg'?0:-1);scenarios++}
for(const fee of [1,3,5])for(const t of [0,2,4]){const r=labs.focus('linear',2,{linearModel:{fee,t}},view);const [a,b]=r.figure.curves;near(a.fn(fee-1),b.fn(fee-1));scenarios++}
// Verify legacy question keys remain disjoint from all new keys.
const keys=new Set();for(const u of ctx.course)u.subtopics.forEach((s,si)=>s.questions.forEach((q,qi)=>{const key=u.legacyOverview&&si===0?`${u.id}-${qi}`:`${u.id}-${si}-${qi}`;assert.ok(!keys.has(key));keys.add(key)}));assert.equal(keys.size,111);
// Independent identities behind the new worked solutions.
for(const a of [-3,-1,0,2]){near((a+1)**2-2*(a+1),a*a-1);for(const h of [-2,.5,3])near((a+h)**2-a*a,2*a*h+h*h)}
for(const x of [-3,-2,0,1,3])near(x*x+6*x+5,(x+3)**2-4);
for(const x of [-2,0])near(2*x*x+1,(2*x+1)**2);
for(const x of [-4,0,2])near(2-Math.sqrt((x-2)**2),x);
near(100*Math.exp(Math.log(1.2)*3),100*1.2**3);
console.log(JSON.stringify({questions:count,writtenTasks:ctx.course.length,subtopics:ctx.course.reduce((n,u)=>n+u.subtopics.length,0),visualParameterScenarios:scenarios,bilingualData:'PASS',mathAndVisualChecks:'PASS'}));
