const weather = document.querySelector(".js-weather");


const API_KEY = "56ddc2fec82ee79fcbe0c0c1bf048bb5";
const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;

    })
}


function saveCoords(coordsObject){
    localStorage.setItem(COORDS, JSON.stringify(coordsObject))
}
function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObject = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObject);
    getWeather(latitude, longitutde)
}

function handleGeoError(){
    console.log("cant access get location");

}


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();