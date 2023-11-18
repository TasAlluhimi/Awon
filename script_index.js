
const userName = localStorage.getItem("username");
const isLogin = localStorage.getItem("isLogin");

   if (isLogin) {
      let navbarDropdown = document.getElementById("navbarDropdown");
   navbarDropdown.innerText= ` ${userName} مرحبا`;
   let textDrop = document.getElementById("textDrop");
   textDrop.innerText= ` تسجيل الخروج`;
   
   
   } 
   // else {
   //    let navbarDropdown = document.getElementById("navbarDropdown");
   // navbarDropdown.innerText= ` ${userName} مرحبا`;
   // let textDrop = document.getElementById("textDrop");
   // textDrop.innerText= ` تسجيل الخروج`;
   // }


// let textDrop = document.getElementById("textDrop");
// textDrop.addEventListener("click", () => {
//     localStorage.clear()
//  });