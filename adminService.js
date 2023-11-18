
let container = document.getElementById("cont")

fetch('https://65572cacbd4bcef8b61230f2.mockapi.io/services')
.then(response => response.json())
.then(data => {
    data.map(service => {
        container.insertAdjacentHTML("afterbegin",
        `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${service.service_name}</h5>
              <p class="card-text">
                ${service.service_Description}
              </p>
              <button id="admin" type="button" onclick="del(${service.id})" class="btn btn-block mb-4">Delete</button>
            </div>
          </div>

          <div class="col-md-4">
            <img
              src="${service.service_imgage}"
              alt="service"
              class="img-fluid rounded-start"
            />
          </div>
        </div>
      </div>
      `);
    })
})
.catch(error => console.error('The error is: ', error))
