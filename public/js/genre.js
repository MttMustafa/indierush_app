//Gallery view
function bigger_picture(thumbnail){
    return `<div class="bigger_pic_container" onclick= "document.querySelector('.bigger_pic_container').remove();">
                <div class="bigger_img_wrap">${thumbnail}</div>
            </div>`
}

const expand_buttons = document.querySelectorAll(".product_expand_btn button");

expand_buttons.forEach(
    expand_button => {
       expand_button.onclick = () => {
           document.body.insertAdjacentHTML('afterbegin',bigger_picture(expand_button.closest('.product-cell').lastElementChild.innerHTML));
       }
    }
)

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (key === "Escape") {
        if(document.contains(document.querySelector('.bigger_pic_container'))){
            document.querySelector('.bigger_pic_container').remove();
        }
    }
});