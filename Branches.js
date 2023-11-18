// let map;
// let marker; 

// function initMap() {
//   let initialCenter = { lat: 24.7136, lng: 46.6753 };

//   map = new google.maps.Map(document.getElementById('googleMap'), {
//     center: initialCenter,
//     zoom: 10
//   });

//   marker = new google.maps.Marker({
//     position: initialCenter,
//     map: map,
//     title: 'Riyadh'
//   });

//   let cityDropdown = document.getElementById('cityDropdown');
//   cityDropdown.addEventListener('change', function () {
//     let selectedCity = cityDropdown.value;

//     updateMapForCity(selectedCity);
//   });
// }

// function updateMapForCity(city) {
//   let cityCoordinates;

//   switch (city) {
//     case 'الرياض':
//       cityCoordinates = { lat: 24.7136, lng: 46.6753 };
//       break;
//     case 'الخرج':
//      
//       cityCoordinates = { lat: 24.1558, lng: 47.3374 };
//       break;
//     case 'جدة':
//       
//       cityCoordinates = { lat: 21.4225, lng: 39.8262 };
//       break;
//    
//   }

//   map.setCenter(cityCoordinates);

//   // Clear previous markers (if any)
//   if (marker) {
//     marker.setMap(null);
//   }

//   marker = new google.maps.Marker({
//     position: cityCoordinates,
//     map: map,
//     title: city
//   });
// }

// google.maps.event.addDomListener(window, 'load', initMap);
