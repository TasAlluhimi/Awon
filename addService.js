
// adding the services by the admin

let service_name = document.getElementById("service-name")
let service_des = document.getElementById("service-des")
let service_img = document.getElementById("service-img")
let addBtn = document.getElementById("add")

addBtn.addEventListener("click", () => {

    service_name = service_name.value
    service_des = service_des.value
    service_img = service_img.value

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

    })
    .catch(error => console.error('The error is: ', error))
})
