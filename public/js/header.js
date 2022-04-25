
//Mobile bar behavior
const hamburger_menu = document.querySelector('.hamburger_menu');
const mbl_bar = document.querySelector('.mbl_bar')
const exit_mbl_bar_btn = document.querySelector('.exit_mbl_bar_btn');

hamburger_menu.onclick = () => {
                                mbl_bar.style.display = 'block';
                                mbl_bar.style.animation = 'mbl_bar_open 0.1s';
                            }

exit_mbl_bar_btn.onclick = () => {mbl_bar.style.animation = 'mbl_bar_close 0.1s'
                                  setTimeout(() => {mbl_bar.style.display = 'none';}, 100);                        
                                 }


// window.onresize = () => {
//     if(window.innerWidth > 600){
//        mbl_bar.style.display = 'none';
//        carousel_container.scrollTo(0,0);
//     }
// }
