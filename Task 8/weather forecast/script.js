'use strict'

const apiKey = "577b3bd2eec54e5a84a1ae825e746783";
const buttonFind = document.querySelector('button');
const degree = '˚';
const percent = '%';
const velocity = ' км/ч';
const chooseDate = document.querySelector('.date');
const update = document.querySelector('.update button');
let city;
const imageCurrent = document.createElement('img');

setMinAndMaxDate();

buttonFind.addEventListener('click', getCurrentCity);
update.addEventListener("click", goFetch);

function setMinAndMaxDate() {
    let futureDate = new Date().setTime(new Date().getTime() + (24 * 60 * 60 * 1000) * 5);
    let dateLast = new Date(futureDate);
    chooseDate.setAttribute('min', new Date().toISOString().substr(0, 10));
    chooseDate.setAttribute('max', dateLast.toISOString().substr(0, 10));
}

async function getCurrentCity() {
    try {
        city = document.querySelector('input').value;
    } catch (error) {
        console.log('Город не найден!', error);
    }
    //city = 'Samara, ru'
    goFetch();
}

function goFetch() {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`, {
        cache: "force-cache",
        keepalive: true
    })
        .then(getStatus)
        .then(getJson)
        .then(getCurrentWeather)
        .catch(function (error) {
            console.log('Request failed', error);
        });
}

async function getStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response.text());
    }
}

function getJson(response) {
    return response.json()
}

function renderDayOrNight(data) {
    let attrName = isDay(data) ? 'day' : 'night';
    document.documentElement.setAttribute('data-theme', attrName);
}

function isDay(data) {
    let sunrise = data.city.sunrise * 1000;
    let sunset = data.city.sunset * 1000;

    let now = Date.now();
    return (now > sunrise && now < sunset);
}

async function getCurrentWeather(data) {
    console.log(data);
    const index = await getIndex(data)[0];
    renderDayOrNight(data);
    await renderForecast(data);
    fetchIcon(data, imageCurrent, index);
    //let image = document.querySelector('.current__weather__icon img').setAttribute('src',`${fetchIcon(data)}`);
    document.querySelector('.current__city').innerHTML = data.city.name + " " + chooseDate.value;
    document.querySelector('.current__description').innerHTML = data.list[index].weather[0]["description"];
    document.querySelector('.current__weather__icon').append(imageCurrent);
    document.querySelector('.current__temperature').innerHTML = getValueWithUnit(Math.round(data.list[index].main.temp), degree);
    document.querySelector('.humidity__unit').innerHTML = getValueWithUnit(data.list[index].main.humidity, percent);
    document.querySelector('.wind__unit').innerHTML = getValueWithUnit(data.list[index].wind.speed, velocity);
}

function fetchIcon(data, img, index) {
    const url = `https://openweathermap.org/img/wn/${data.list[index].weather[0]["icon"]}@2x.png`;
    let xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.onload = () => {
        console.log(index);
        if (xhr.status < 200 || xhr.status > 300) {
            console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else {
            img.setAttribute("src", `${xhr.responseURL}`);
            console.log(xhr.responseURL);
        }
    }
    xhr.send();
}

function getValueWithUnit(value, unit) {
    return `${value}${unit}`;
}

function renderForecast(data) {
    let forecastDataContainer = document.querySelector('.forecast');
    const indexOfDataOnChooseDate = getIndex(data);
    let forecasts = '';
    for (let i = 0; i < indexOfDataOnChooseDate.length; i++) {
        let item = data.list[i + indexOfDataOnChooseDate[0]];

        let icon = item.weather[0].icon;
        let iconName = icon.substr(0, 2);
        let temp = item.main.temp;
        let hours = item.dt_txt.substr(11, 5);

        let template = `<div class="forecast__item">
          <div class="forecast__time">${hours}</div>
          <div class="forecast__icon icon__${icon}"><img src="img/${iconName}.png" alt="icon"></div>
          <div class="forecast__temperature">${getValueWithUnit(Math.round(temp), degree)}</div>
        </div>`;
        forecasts += template;
    }
    forecastDataContainer.innerHTML = forecasts;
}

function getIndex(data) {
    let index = [];
    let j = 0;
    for (let i = 0; i < data.list.length; i++) {
        if (data.list[i].dt_txt.substr(0, 10) === chooseDate.value) {
            index[j] = i;
            j++;
        }
    }
    return index;
}

function getIndex1(data) {
    let item = data.list;
    let dateArray = [];
    dateArray = item.forEach(element => element.dt_txt.substr(0, 10));
    return dateArray;
    //filter(date => date === chooseDate.value)
}
