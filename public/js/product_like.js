const heart_btns = document.querySelectorAll(".product_heart_btn button");
const heart_btn_ctns = document.querySelectorAll(".product_heart_btn");

let count = 0;

heart_btns.forEach(
    (heart_btn) => {
        heart_btn.onclick = () => {
            heart_btn.closest(".product_heart_btn").classList.toggle("heart_active");
        }
    }
)