// Load shared components into pages and wire up mobile nav
(function(){
  async function loadHTML(selector, url){
    try{
      const res = await fetch(url);
      if(!res.ok) throw new Error('Failed to load '+url);
      const html = await res.text();
      document.querySelector(selector).innerHTML = html;
      return true;
    }catch(e){
      console.warn(e);
      return false;
    }
  }

  async function init(){
    await loadHTML('#nav-placeholder', 'components/nav.html');
    await loadHTML('#footer-placeholder', 'components/footer.html');

    // set year in footer
    const y = new Date().getFullYear();
    const yearEls = document.querySelectorAll('.year');
    yearEls.forEach(e=>e.textContent = y);

    // mobile nav toggle
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');
    if(toggle && links){
      toggle.addEventListener('click', ()=>{
        links.classList.toggle('show');
      });

      // close menu when a link is clicked (mobile)
      links.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>links.classList.remove('show')));
    }

    // close nav if clicking outside (mobile)
    document.addEventListener('click', (e)=>{
      if(!e.target.closest('.site-nav') && links && links.classList.contains('show')){
        links.classList.remove('show');
      }
    });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
