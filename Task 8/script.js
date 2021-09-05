'use strict'

const apiKey = "577b3bd2eec54e5a84a1ae825e746783";
let city = "London, uk";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
let response = fetch(url);

function renderDayOrNight(data) {
    let attrName = isDay(data) ? 'day':'night';
    document.documentElement.setAttribute('data-theme', attrName);
}

function isDay(data) {
    let sunrise = data.sys.sunrise * 1000;
    let sunset = data.sys.sunset * 1000;

    let now = Date.now();
    return (now > sunrise && now < sunset);
}


response
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        console.log(data);
        renderDayOrNight(data);
        document.querySelector('.current__city').innerHTML = data.name;
        document.querySelector('.current__description').innerHTML = data.weather[0]["description"];
        document.querySelector('.current__weather__icon').innerHTML = `<img src="img/${data.weather[0]["icon"].substr(0,2)}.png" alt="icon">`;
        document.querySelector('.current__temperature').innerHTML = data.main.temp;
        document.querySelector('.humidity__unit').innerHTML = data.main.humidity;
        document.querySelector('.wind__unit').innerHTML = data.wind.speed;

    })
    .catch(function (e) {
        console.error(e);
    });
