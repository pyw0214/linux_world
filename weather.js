const API_KEY = "56ddc2fec82ee79fcbe0c0c1bf048bb5";

const COORDS = 'coords';

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
        //getweather
    }
}

function init(){
    loadCoords();
}

init();