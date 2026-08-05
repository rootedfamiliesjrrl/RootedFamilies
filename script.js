const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('#site-nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const lightbox=document.querySelector('.lightbox');
const lightboxImage=lightbox?.querySelector('img');
function closeLightbox(){if(!lightbox)return;lightbox.hidden=true;document.body.style.overflow='';}
document.querySelectorAll('.gallery-item').forEach(button=>button.addEventListener('click',()=>{if(!lightbox||!lightboxImage)return;lightboxImage.src=button.dataset.full;lightbox.hidden=false;document.body.style.overflow='hidden';}));
lightbox?.querySelector('.lightbox-close')?.addEventListener('click',closeLightbox);
lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});
