const API_KEY = "72ebf8915976b0324dfd0abd70645a92"

function onGeoOk(positon){
    const lat = positon.coords.latitude;
    const lon = positon.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json().then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }));
}
function onGeoError(){
    alert("Can`t find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);