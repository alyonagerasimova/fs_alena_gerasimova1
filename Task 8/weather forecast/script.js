'use strict'

const apiKey = "577b3bd2eec54e5a84a1ae825e746783";
const buttonFind = document.querySelector('button');
const degree = '˚';
const percent = '%';
const velocity = ' км/ч';
const chooseDate = document.querySelector('.date');
const update = document.querySelector('.update button');
let city;
const iconWeather = document.createElement('img');


setMinAndMaxDate();

buttonFind.addEventListener('click', getCurrentCity);
update.addEventListener("click", goFetch);

//console.log(chooseDate.outerHTML);

function setMinAndMaxDate() {
    let futureDate = new Date().setTime(new Date().getTime() + (24 * 60 * 60 * 1000) * 5);
    let dateLast = new Date(futureDate);
    let dateNow = new Date().toISOString().substr(0, 10);
    chooseDate.setAttribute('autocomplete', dateNow);
    chooseDate.setAttribute('min', dateNow);
    chooseDate.setAttribute('max', dateLast.toISOString().substr(0, 10));
}

async function getCurrentCity() {
    city = document.querySelector('input').value;
    goFetch();
}

function goFetch() {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}&lang=ru`)
        .then(getStatus)
        .then(getJson)
        .then(getCurrentWeather)
        .catch(function (error) {
            console.log('Город не найден', error);
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
    //console.log(data);
    const index = await getIndexesOfDataListOnChooseDate(data)[0];
    const indexLast = getIndexesOfDataListOnChooseDate(data).length - 1;
    const avgIndex = Math.round((index + indexLast) / 2);

    renderDayOrNight(data);
    await renderForecast(data);
    await fetchIcon(data.list[avgIndex].weather[0].icon, iconWeather);
    document.querySelector('.current__city').innerHTML = data.city.name + " " + chooseDate.value;
    document.querySelector('.current__description').innerHTML = `Преимущественно ${data.list[avgIndex].weather[0]["description"]}`;
    document.querySelector('.current__weather__icon').append(iconWeather);
}

function fetchIcon(dataListIcon, img) {
    let url = `https://openweathermap.org/img/wn/${dataListIcon}@2x.png`;
    let xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.onload = () => {
        if (xhr.status !== 200) {
            console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else {
            document.cookie = 'samesite=lax';
            img.setAttribute("src", `${xhr.responseURL}`);
            //console.log(img.outerHTML);
        }
    }
    xhr.send();
}

function getValueWithUnit(value, unit) {
    return `${value}${unit}`;
}

function renderForecast(data) {
    let forecastDataContainer = document.querySelector('.forecast');
    forecastDataContainer.innerHTML = '';
    const indexOfDataOnChooseDate = getIndexesOfDataListOnChooseDate(data);
    let iconForecastWeather;
    let sumHumidity = 0;
    let sumWindSpeed = 0;
    let sumTemperature = 0;
    const lengthForecast = indexOfDataOnChooseDate.length;
    for (let i = 0; i < lengthForecast; i++) {
        iconForecastWeather = document.createElement('img');
        let index = i + indexOfDataOnChooseDate[0];
        let item = data.list[index];
        let icon = item.weather[0].icon;
        let temp = item.main.temp;
        let hours = item.dt_txt.substr(11, 5);

        fetchIcon(icon, iconForecastWeather);

        let forecastItem = document.createElement('div');
        forecastItem.className = "forecast__item";
        let forecastTime = document.createElement('div');
        forecastTime.className = "forecast__time";
        let forecastIcon = document.createElement('div');
        forecastIcon.className = "forecast__icon";
        let forecastTemp = document.createElement('div');
        forecastTemp.className = "forecast__temperature";

        forecastItem.append(forecastTime, forecastIcon, forecastTemp);
        forecastTime.textContent = hours;
        forecastIcon.append(iconForecastWeather);
        forecastTemp.textContent = getValueWithUnit(Math.round(temp), degree);
        forecastDataContainer.append(forecastItem);
        sumHumidity += item.main.humidity;
        sumWindSpeed += item.wind.speed;
        sumTemperature += item.main.temp;
    }
    document.querySelector('.current__temperature').innerHTML = getValueWithUnit(Math.round(sumTemperature / lengthForecast), degree);
    document.querySelector('.humidity__name').innerHTML =` Влажность (средняя):`;
    document.querySelector('.humidity__unit').innerHTML = getValueWithUnit((sumHumidity / lengthForecast).toFixed(1), percent);
    document.querySelector('.wind__name').innerHTML = `Скорость ветра (средняя):`;
    document.querySelector('.wind__unit').innerHTML = getValueWithUnit((sumWindSpeed / lengthForecast).toFixed(1), velocity);
}

function getIndexesOfDataListOnChooseDate(data) {
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

function getDataOfIndex(data) {
    let item = data.list;
    let dataList = [];
    dataList = item.filter(element => element.dt_txt.substr(0, 10) === chooseDate.value);
    return dataList;
}
