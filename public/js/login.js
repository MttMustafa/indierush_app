//Login/Signup Logic

function qs(query){
    return document.querySelector(query);
}



const login_form_wrap = qs('.login_form_wrap');
const signup_form_wrap = qs('.signup_form_wrap');
const signup_redirect = qs('#signup_redirect');
const login_redirect = qs('#login_redirect');


signup_redirect.onclick = () => {
    login_form_wrap.style.display = "none";
    signup_form_wrap.style.display = "block";
}

login_redirect.onclick = () => {
    signup_form_wrap.style.display = "none";
    login_form_wrap.style.display = "block";
}


function signup() {
    const signup_email = qs('#signup_email_input').value;    
    const singup_password = qs('#signup_password_input').value;
    const password_check = qs('#password_input_check').value;
    const name = qs('#name_input').value;
    const lastName = qs('#lastname_input').value;

    const user = {
        email: signup_email,
        password: singup_password,
        passwordMatch: password_check,
        name,
        lastName
    }
    fetch(`/signup`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }    
    )


}

function login(){
    const login_email = qs('#login_email_input').value;
    const login_password = qs('#login_password_input').value;

    const user = {
        email: login_email,
        password: login_password
    }

    fetch(`/login`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }
    )

}

const login_btn = qs('#login_btn');
const signup_btn = qs('#signup_btn');

login_btn.onclick = () => login();
signup_btn.onclick = () => signup();

