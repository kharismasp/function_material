function renderDeepNotes(){
 const pages=deepContent[unitId+'/'+subIndex];if(!pages)return;
 const panel=document.createElement('details');panel.className='deep-notes';
 panel.innerHTML=`<summary>${t('Pendalaman materi','Explore in more depth')} · ${pages.length} ${t('bagian','sections')}</summary>${pages.map(p=>`<details><summary>${esc(tr(p.title))}</summary><div class="deep-material ${p.visual?'deep-layout':''}"><div><div class="formula">${esc(p.formula)}</div>${tr(p.paragraphs).map(x=>`<p>${esc(x)}</p>`).join('')}<details><summary>${t('Contoh & penalaran','Example & reasoning')}</summary><ol>${tr(p.steps).map(x=>`<li>${esc(x)}</li>`).join('')}</ol></details>${p.check?`<p class="discussion">${esc(tr(p.check))}</p>`:''}<p class="source-note">${esc(p.source)}</p></div>${p.visual?classroomVisual(p.visual):''}</div></details>`).join('')}`;
 $('#concept').append(panel);
}
function installQuickNav(){
 const bar=document.createElement('nav');bar.className='quick-nav';bar.setAttribute('aria-label',t('Navigasi cepat','Quick navigation'));
 bar.innerHTML=`<button data-quick="prev" ${units.indexOf(activeUnit())===0&&subIndex===0?'disabled':''}>← ${t('Sebelumnya','Previous')}</button><button data-quick="sub">${t('Subtopik','Subtopics')}</button><button data-quick="concept">${t('Materi','Learn')}</button><button data-quick="explore">${t('Visual','Visual')}</button><button data-quick="practice">${t('Latihan','Practice')}</button><button data-quick="next">${t('Berikutnya','Next')} →</button>`;
 $('#main').prepend(bar);
 bar.querySelectorAll('button').forEach(b=>b.onclick=()=>{const k=b.dataset.quick;if(k==='prev'||k==='next'){document.querySelector('#'+k)?.click();return;}const target=k==='sub'?$('.subtopic-nav'):$('#'+k);target?.scrollIntoView({behavior:'instant'});});
}
