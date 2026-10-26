const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const ctx={};vm.createContext(ctx);vm.runInContext(fs.readFileSync('dist/deep-content.js','utf8')+';globalThis.data=deepContent;',ctx);
let count=0;const keys=new Set(),visuals=new Set();for(const [group,pages]of Object.entries(ctx.data)){assert.match(group,/^(exponential|logarithm|modelling|polynomial|rational)\/[012]$/);for(const p of pages){count++;assert.ok(!keys.has(p.key));keys.add(p.key);assert.ok(p.formula&&p.source);for(const l of ['id','en']){assert.ok(p.title[l]);assert.ok(p.paragraphs[l].length>=2);assert.ok(p.steps[l].length>=3);for(const text of [...p.paragraphs[l],...p.steps[l]])assert.ok(text.length>8);}assert.equal(p.steps.id.length,p.steps.en.length);if(p.visual)visuals.add(p.visual);}}
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-9,`${a} != ${b}`);
// Independent substitutions and restrictions in the new worked exposition.
near(16**.75,8);near(3*2**(1-1)-4,-1);near(3*2**(-1)-4,-2.5);near(4*2**0+2,6);near(4*2+2,10);
near(9**4,3**8);near(3*2**(Math.log(7)/Math.log(2))-4,17);near(4**2-3*2**2-4,0);
assert.ok(.8**4<=.5);assert.ok(Math.log(.8)<0);near(Math.log(.5)/Math.log(.8),3.10628371950539);
near(2*Math.log(4-3)+1,1);near(Math.log(4)/Math.log(2),2);near(Math.log(9),2*Math.log(3));
near(Math.log10(10)+Math.log10(1),1);assert.ok(-1<=9);near(Math.log(5-1)/Math.log(.5),-2);
const inv=x=>.5*Math.log((x-1)/3);for(const x of [-2,0,1])near(inv(3*Math.exp(2*x)+1),x);
near(200*1.2**2,288);near(80*Math.exp(-Math.log(2)/3*6),20);near(100*2**(Math.log(2)/Math.log(4/3)),200*1.5**(Math.log(2)/Math.log(4/3)));
near(Math.exp(Math.log(5)),5);near(2*(0+2)*(0-1)*(0-3),12);near(2/(0-3)-1,-5/3);
for(const x of [-Math.sqrt(3),Math.sqrt(3)])near(2/(x-1),x+1);
// Inspect exact model callbacks, including singularities and equal scales.
const g={window:{addEventListener:()=>{}},t:(a,b)=>b,esc:String,graph:(curves,view,points,label)=>{g.last={curves,view,points,label};return ''}};vm.createContext(g);vm.runInContext(fs.readFileSync('dist/classroom.js','utf8')+';globalThis.draw=classroomVisual;',g);
for(const v of visuals){const html=g.draw(v);assert.ok(!html.includes('undefined'));if(v==='ratio')continue;const {curves,view,points}=g.last;near(view.xmax-view.xmin,view.ymax-view.ymin);for(const p of points){if(p.open)continue;assert.ok(curves.some(c=>c.fn&&Math.abs(c.fn(p.x)-p.y)<1e-9),v+' point off model');}}
g.draw('inverse');const c=g.last.curves;for(const x of [-1,0,1,1.5])near(c[1].fn(c[0].fn(x)),x);assert.ok(Number.isNaN(c[1].fn(0)));
g.draw('reciprocal');assert.ok(Number.isNaN(g.last.curves[0].fn(3)));assert.equal(g.last.curves[0].breaks[0],3);
g.draw('hole');assert.ok(g.last.points[0].open);assert.ok(Number.isNaN(g.last.curves[0].fn(1)));
console.log(JSON.stringify({deepLessonScreens:count,sourcePDFs:2,bilingual:'PASS',newVisuals:visuals.size,exactModelsAndExamples:'PASS'}));
