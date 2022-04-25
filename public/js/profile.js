
//Mobile bar behavior
const hamburger_menu = document.querySelector('.hamburger_menu');
const mbl_bar = document.querySelector('.mbl_bar')
const exit_mbl_bar_btn = document.querySelector('.exit_mbl_bar_btn');

hamburger_menu.onclick = () => {mbl_bar.style.top = `${document.documentElement.scrollTop}`;
                                mbl_bar.style.display = 'block';
                                mbl_bar.style.animation = 'mbl_bar_open 0.1s';
                            }

exit_mbl_bar_btn.onclick = () => {mbl_bar.style.animation = 'mbl_bar_close 0.1s'
                                  setTimeout(() => {mbl_bar.style.display = 'none';}, 100);                        
                                 }


window.onresize = () => {
    if(window.innerWidth > 600){
       mbl_bar.style.display = 'none';
    }
}



//Change Password Logic

const change_pass_link = document.querySelector(".change_password_link");
const go_back_link = document.querySelector(".go_back_link");
const prof_inf_name_view = document.querySelector(".profile_info_name_view");
const prof_inf_change_pw = document.querySelector(".profile_info_change_pw");

change_pass_link.onclick = () =>{prof_inf_name_view.style.display = "none";
                                 prof_inf_change_pw.style.display = "block";
                                }
go_back_link.onclick = () =>{prof_inf_name_view.style.display = "block";
                             prof_inf_change_pw.style.display = "none";
                            }

const change_pw_old = document.querySelector(".change_pw_old");
const change_pw_new = document.querySelector(".change_pw_new");
const change_pw_repeat = document.querySelector(".change_pw_repeat");
const change_pw_btn = document.querySelector(".change_pw_btn");

function change_password(){
    if(change_pw_new.value !== change_pw_repeat.value){
       alert("Please enter new password correctly!"); 
    }
    else if(change_pw_new.value === "" || change_pw_repeat.value === "" || change_pw_old.value === "" ){
        alert("No empty spaces!");
    }
    else{
        localStorage.setItem(current_user,change_pw_new.value);
    }
}

change_pw_btn.onclick = () => change_password();

