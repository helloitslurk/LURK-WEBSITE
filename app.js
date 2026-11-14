document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.site-menu-toggle');
  const nav=document.querySelector('.site-nav');
  if(toggle&&nav){
    const closeMenu=()=>{
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
      toggle.setAttribute('aria-label','Menüyü aç');
    };
    toggle.addEventListener('click',()=>{
      const isOpen=nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded',String(isOpen));
      toggle.setAttribute('aria-label',isOpen?'Menüyü kapat':'Menüyü aç');
    });
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
    document.addEventListener('click',event=>{
      if(!nav.contains(event.target)&&!toggle.contains(event.target)) closeMenu();
    });
    document.addEventListener('keydown',event=>{if(event.key==='Escape') closeMenu();});
  }
  const year=document.querySelector('#year');
  if(year) year.textContent=new Date().getFullYear();
});