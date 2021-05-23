import './style.css' ;
const query = document.querySelector('#query');
const words = document.querySelector('#words');
const points = document.querySelector('#points');
query.addEventListener('click',getGeo);
async function getGeo(){
    points.innerHTML ='';
    if(!navigator.geolocation) {
        words.innerHTML =`<i class="fas fa-exclamation"></i> . Need Location Access`;
      } else {
        words.innerHTML = 'Locating…';
        await navigator.geolocation.getCurrentPosition(success, error);
      }
}
function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const mapLink = document.createElement('a');
    mapLink.href = `http://maps.google.com/maps?q=loc:${latitude},${longitude}`;
    mapLink.innerHTML  = ` Latitude: ${latitude} °, Longitude: ${longitude} °  <i class="fas fa-external-link-alt"></i>`;
    mapLink.target = '_blank';
    points.appendChild(mapLink);
    what3words.api.convertTo3wa({lat:latitude, lng:longitude}, 'en')
  .then(function(response) {
    console.log("[convertTo3wa]", response);
    // words.innerHTML = response.words;
    words.innerHTML = response.words.replaceAll(".", " . ");
  }).catch(function(error) { // catch errors here
    console.log("[code]", error.code);
    console.log("[message]", error.message);
    words.innerHTML =`<i class="fas fa-bug"></i>  Unable to contact 3words server`;
  });;
  }
  function error() {
    words.innerHTML = `<i class="fas fa-exclamation"></i>  Unable to retrieve your location`;
  }

 