
const index_navbar = document.querySelector('.navbar');
const nav_action_button = document.querySelectorAll('.nav_action');
const index_hamburger_menu = document.querySelector('.hamburger_menu');
window.onscroll = () => {
   if (document.documentElement.scrollTop > 80) {
      index_navbar.style.height = '7vh';
      index_navbar.style.backgroundColor = '#001d3d';
      // nav_action_button[0].classList.add('narrow_bar_action_buttons');
      // nav_action_button[1].classList.add('narrow_bar_action_buttons');
      // index_hamburger_menu.classList.add('narrow_bar_action_buttons');
   } else {
      index_navbar.style.height = '15vh';
      index_navbar.style.backgroundColor = '';
      // nav_action_button[0].classList.remove('narrow_bar_action_buttons');
      // nav_action_button[1].classList.remove('narrow_bar_action_buttons');
      // index_hamburger_menu.classList.remove('narrow_bar_action_buttons');
   }
}

//Sliding carousel behavior
const slide_back = document.querySelector('.slide_back_btn');
const slide_foward = document.querySelector('.slide_foward_btn');
const slide_carousel = document.querySelector('.product_carousel_container');
slide_back.onclick = () => {
    slide_carousel.scrollBy(-350,0);
}

slide_foward.onclick = () => {
    slide_carousel.scrollBy(350,0);
}

// let scrollbar_pos = carousel_container.scrollLeft / (carousel_container.scrollWidth - carousel_container.offsetWidth);
    
    // if(scrollbar_pos >= 1){
    //    carousel_container.scrollTo(0,0) 
    // }
    // else{
    //     carousel_container.scrollBy(carousel_container.offsetWidth,0)
    // }  
 ///////////////
    // let scrollbar_pos = carousel_container.scrollLeft / (carousel_container.scrollWidth - carousel_container.offsetWidth);
    
    // if(scrollbar_pos === 0){
    //    carousel_container.scrollTo(carousel_container.scrollWidth,0) 
    // }
    // else{
    //     carousel_container.scrollBy(-carousel_container.offsetWidth,0)
    // } 


