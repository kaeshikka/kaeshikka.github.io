'use strict';
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
document.querySelector('#year').textContent=new Date().getFullYear();
const dialog=document.querySelector('.lightbox');
if(typeof dialog.showModal==='function'){
 document.querySelectorAll('.gallery-link').forEach(link=>link.addEventListener('click',event=>{
  event.preventDefault();const source=link.querySelector('img');const image=dialog.querySelector('img');image.src=link.href;image.alt=source.alt;dialog.querySelector('p').textContent=source.alt;dialog.showModal();document.body.classList.add('modal-open');
 }));
 dialog.querySelector('button').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
 dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
}
if('IntersectionObserver' in window){const links=[...nav.querySelectorAll('a')];const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>{const active=link.hash==='#'+entry.target.id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}});},{rootMargin:'-15% 0px -60% 0px'});document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));}
