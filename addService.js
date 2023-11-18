
// adding the services by the admin

let service_name_input = document.getElementById("service-name");
let service_des_input = document.getElementById("service-des");
let service_img_input = document.getElementById("service-img");
let addBtn = document.getElementById("add");

// console.log(service_name_input, service_des_input, service_img_input, addBtn);

addBtn.addEventListener("click", () => {

    let service_name = service_name_input.value;
    let service_des = service_des_input.value;
    let service_img = service_img_input.value;

    fetch('https://65572cacbd4bcef8b61230f2.mockapi.io/services', {
    method: 'POST',
    body: JSON.stringify({
        service_name: service_name,
        service_Description: service_des,
        service_imgage: service_img,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then(response => response.json())
    .then(data => {
        window.location.href = 'adminService.html';
        
    })
    .catch(error => console.error('The error is: ', error))
})
