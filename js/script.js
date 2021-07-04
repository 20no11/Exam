'use-strict';
const link = document.querySelectorAll('.tabheader__item'),
    content = document.querySelectorAll('.tabcontent');

content.forEach(n=>{
    n.style.display="none";
});

link.forEach(n=>{
    n.classList.remove('tabheader__item_active');
});

content[0].style.display='block';
link[0].classList.add('tabheader__item_active');




link.forEach((n,index)=>{
    n.addEventListener('click', ()=>{
        link.forEach(n=>{
            n.classList.remove('tabheader__item_active');
        });
        n.classList.add('tabheader__item_active');
        content.forEach(n=>{
            n.style.display="none";
        });
        content[index].style.display = 'block';
    });
});



const anchors = document.querySelectorAll('.menu__nav');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href');
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'auto',
      block: 'end'
    })
  })
}


  (function() {
    function trackScroll() {
      var scrolled = window.pageYOffset;
    //   var coords = document.documentElement.clientHeight;
      var coords = document.querySelector('header').offsetHeight;
      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled <= coords) {
        goTopBtn.classList.remove('back_to_top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.back_to_top');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();