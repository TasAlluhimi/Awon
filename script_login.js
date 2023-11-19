//login
let get_data = document.getElementById("get-data")
let inp_username = document.getElementById("username");
let inp_email = document.getElementById("email");
let inp_psw = document.getElementById("psw");
let inp_psw_repeat = document.getElementById("psw-repeat");
let login = document.getElementById("login");
let text_user = document.getElementById("text-user");
let text_email = document.getElementById("text-email");
let text_psw = document.getElementById("text-psw");
let text_psw_repeat = document.getElementById("text-psw-repeat");
let result = document.getElementById("result")

function apiFunGet() {
    login.addEventListener("click", () => {
        let enteredUsername = inp_username.value ;
        let enteredEmail = inp_email.value ;
        let enteredPsw = inp_psw.value;

        fetch('https://65572cacbd4bcef8b61230f2.mockapi.io/users', {
                method: "get"
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                for (let i = 0; i < data.length; i++) {
                    if (enteredUsername === "admin#"  && enteredPsw === 'adminadmin' && enteredEmail === 'admin@admin.com') {
                        result.innerHTML ='تم تسجيل الدخول بنجاح!';
                        result.style.color="#335F42"
                        localStorage.setItem("username", enteredUsername);
                        localStorage.setItem("isLogin", true);
                        window.location.href = 'adminService.html';

                    } else if (enteredUsername === data[i].username  && enteredPsw === data[i].psw && enteredEmail === data[i].email) {
                        result.innerHTML ='تم تسجيل الدخول بنجاح!';
                        result.style.color="#335F42"
                        localStorage.setItem("username", enteredUsername);
                        localStorage.setItem("isLogin", true);
                        window.location.href = 'index.html';
                    } else {
                        result.innerHTML ='البيانات غير صحيحة. حاول مرة اخرى.';
                        result.style.color="#960724"

                      }
                }
            })
            .catch((err) => console.log(`The error is ${err}`));
    });
}
 apiFunGet();


//  logout.addEventListener("click", () => {
//     localStorage.clear()

//  });