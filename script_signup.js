// signup 
let inp_username = document.getElementById("username");
let inp_email = document.getElementById("email");
let inp_psw = document.getElementById("psw");
let inp_psw_repeat = document.getElementById("psw-repeat");
let signupbtn = document.getElementById("signupbtn");
let text_user = document.getElementById("text-user");
let text_email = document.getElementById("text-email");
let text_psw = document.getElementById("text-psw");
let text_psw_repeat = document.getElementById("text-psw-repeat");
let result = document.getElementById("result")




function validate() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (inp_username.value.length < 6) {
        text_user.innerText = "يجب أن لا يقل طول اسم المستخدم عن 6 أحرف. حاول مرة اخرى";
    }else {
        text_user.innerText = "";
    }

    if (inp_username.value === "admin" || inp_username.value === "Admin" || inp_username.value === "#admin") {
        text_user.innerText = " اسماء غير مصرح بها ";
    }else {
        text_user.innerText = "";
    }

    if (!emailRegex.test(inp_email.value)) {
        text_email.innerText = " الرجاء إدخال عنوان بريد إلكتروني صحيح";
    } else {
        text_email.innerText = "";
    }

    if (inp_psw.value.length < 9) {
        text_psw.innerText = "يجب أن تتكون كلمة المرور من 9 أحرف على الأقل. حاول مرة اخرى.";
    } else {
        text_psw.innerText = "";
    }

    if (inp_psw.value !== inp_psw_repeat.value) {
        text_psw_repeat.innerText = "كلمة المرور غير متطابقة. حاول مرة اخرى.";
    } else {
        text_psw_repeat.innerText = "";
    }

}

// POST - Sign up 
function apiFunPost() {
    signupbtn.addEventListener("click", () => {
        if (validate()) {
            let username = inp_username.value;
            let email = inp_email.value;
            let psw = inp_psw.value;

            fetch('https://65572cacbd4bcef8b61230f2.mockapi.io/users', {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    email,
                    psw
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                result.innerHTML ='تم إنشاء الحساب بنجاح!';
                    result.style.color="#335F42"
                    localStorage.setItem("username", enteredUsername);
                    localStorage.setItem("isLogin", true);
                    window.location.href = 'index.html';
            })
            .catch((error) => {
                console.error('Error:', error);
                result.innerHTML ='حدث خطأ أثناء إنشاء الحساب. حاول مرة اخرى.';
                result.style.color="#960724"
            });
        }
    });
}
apiFunPost();