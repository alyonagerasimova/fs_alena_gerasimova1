'use strict'

const apiKey = "577b3bd2eec54e5a84a1ae825e746783";
const buttonFind = document.querySelector('button');
const degree = '˚';
const percent = '%';
const velocity = ' км/ч';
const chooseDate = document.querySelector('.date');

const currentDate = new Date();

chooseDate.setAttribute('min', new Date().toISOString().substr(0,10).toString());
chooseDate.setAttribute('max', `${currentDate.getFullYear()}-0${currentDate.getMonth()}-${currentDate.getDate() + 5}`);

//Вынести установку диапазона дат с прогнозом в отдельную функцию
//Добавить кнопку обновить
//в каррент выводить иконку наиболее часто встречающуюся, если был выбран не сегодняшний день, в противном случае вывести то описание и иконку,
//когда время запроса наиболее близко к одному из предоставляемых часов
//

//list[0].dt_txt="2021-09-06 12:00:00"
//list[1].dt_txt="2021-09-06 15:00:00"

buttonFind.addEventListener('click', getCurrentCity);

// const url = `https://bulk.openweathermap.org/sample/city.list.json.gz/city.list.json&appid=${apiKey}`;
// let xhr = new XMLHttpRequest();
// xhr.open('get',url,true);
// xhr.send()
getCitiesList();

function getCitiesList() {
    $.getJSON('city.list.json', function (data) {
        $.each(data, function () {
            $('#cities').append('<option value="' + this.name + ', ' + this.country + '"/>');
        });
    });
}

function getCurrentCity() {
    let city = document.querySelector('input').value;
    //city = 'Samara, ru'
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`, {
        cache: "force-cache",
        keepalive: true
    })
        .then(getStatus)
        .then(getJson)
        .then(getWeather)
        .catch(function (error) {
            console.log('Request failed', error);
        });
}

function getStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
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

function getWeather(data) {
    console.log(data);
    const index = getIndex(data)[0];
    //console.log(index);
    //console.log(data.list[0].dt_txt.substr(0,10));
    renderDayOrNight(data);
    renderForecast(data);
    document.querySelector('.current__city').innerHTML = data.city.name + " " + chooseDate.value;
    document.querySelector('.current__description').innerHTML = data.list[index].weather[0]["description"];
    document.querySelector('.current__weather__icon').innerHTML = `<img src="img/${data.list[index].weather[0]["icon"].substr(0, 2)}.png" alt="icon">`;
    document.querySelector('.current__temperature').innerHTML = getValueWithUnit(Math.round(data.list[index].main.temp), degree);
    document.querySelector('.humidity__unit').innerHTML = getValueWithUnit(data.list[index].main.humidity, percent);
    document.querySelector('.wind__unit').innerHTML = getValueWithUnit(data.list[index].wind.speed, velocity);
}

function getValueWithUnit(value, unit) {
    return `${value}${unit}`;
}

function renderForecast(data) {
    let forecastDataContainer = document.querySelector('.forecast');
    // let forecastTime = document.querySelectorAll('.forecast__time');
    // let forecastIcon = document.querySelectorAll('.forecast__icon');
    // let forecastTemp = document.querySelectorAll('.forecast__temperature');
    const indexOfDataOnChooseDate = getIndex(data);
    let forecasts = '';
    for (let i = 0; i < indexOfDataOnChooseDate.length; i++) {
        let item = data.list[i + indexOfDataOnChooseDate[0]];

        let icon = item.weather[0].icon;
        let iconName = icon.substr(0, 2);
        let temp = item.main.temp;
        let hours = (i + indexOfDataOnChooseDate[0] === 0 ? 'Сейчас' : item.dt_txt.substr(11, 5));

        let template = `<div class="forecast__item">
          <div class="forecast__time">${hours}</div>
          <div class="forecast__icon icon__${icon}"><img src="img/${iconName}.png" alt="icon"></div>
          <div class="forecast__temperature">${getValueWithUnit(Math.round(temp), degree)}</div>
        </div>`;
        forecasts += template;

        // forecastTime.item(i).textContent = hours[i] + ":00";
        // forecastIcon.item(i).innerHTML = `<img src="img/${iconName}.png" alt="icon">`;
        // forecastTemp.item(i).innerHTML = getValueWithUnit(Math.round(temp), degree);
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
