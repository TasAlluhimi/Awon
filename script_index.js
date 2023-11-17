
const userName = localStorage.getItem("username");
// if(!userName){
//    window.location.href='Login.html';
// }else {
   let navbarDropdown = document.getElementById("navbarDropdown");
   navbarDropdown.innerText= ` ${userName} مرحبا`;
   let textDrop = document.getElementById("textDrop");
   textDrop.innerText= ` تسجيل الخروج`;


// let textDrop = document.getElementById("textDrop");
// textDrop.addEventListener("click", () => {
//     localStorage.clear()
//  });