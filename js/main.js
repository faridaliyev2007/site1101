// Mobile nav toggle for Jekyll portfolio
(function(){
  function init(){
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
