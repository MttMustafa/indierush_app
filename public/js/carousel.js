
//Carousel behavior
const carousel_container = document.querySelector('.carousel-container');
const crsl_prev = document.querySelector('.crsl_prev_btn');
const crsl_next = document.querySelector('.crsl_next_btn');
const num_of_window = carousel_container.childElementCount - 2 - 1;
let crsl_control_num = 0;

function scroll_next(){
    
    if(crsl_control_num === num_of_window){
        crsl_control_num = 0;
        carousel_container.scrollTo(carousel_container.offsetWidth * crsl_control_num,0);
    }
    else{
        ++crsl_control_num;
        carousel_container.scrollTo(carousel_container.offsetWidth * crsl_control_num,0);
    }
    
}

function scroll_prev(){
    
    if(crsl_control_num === 0){
        crsl_control_num = num_of_window;
        carousel_container.scrollTo(carousel_container.offsetWidth * crsl_control_num,0);
    }
    else{
        --crsl_control_num;
        carousel_container.scrollTo(carousel_container.offsetWidth * crsl_control_num,0);
    }
}

crsl_next.onclick = () => scroll_next();
crsl_prev.onclick = () => scroll_prev();    

setInterval(scroll_next, 5000);


// const win1_sel =  document.querySelector('#w1_sel');
// win1_sel.onclick = () => {
//     carousel_container.scrollTo(0,0);
// }

// const win2_sel =  document.querySelector('#w2_sel');
// win2_sel.onclick = () => {
//     carousel_container.scrollTo(carousel_container.offsetWidth,0);
// }

// const win3_sel =  document.querySelector('#w3_sel');
// win3_sel.onclick = () => {
//     carousel_container.scrollTo(carousel_container.scrollWidth,0);
// }

