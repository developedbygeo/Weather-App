import showErr from './util.functions';
import verifyQuery from '../load/verify.data';
import { getData, handleData } from '../load/api';

async function populateDOM() {
  const apiSuccess = await getData(verifyQuery());
  const weatherObject = await handleData(apiSuccess);
  // Cache DOM

  // main weather info - article - caching
  const [
    locationText,
    dateText,
    tempText,
    weatherDisplayDiv,
    tempMinText,
    tempMaxText,
  ] = [
    document.querySelector('.location-wrapper h1'),
    document.querySelector('.date-wrapper p'),
    document.querySelector('.temp-wrapper h2'),
    document.querySelector('.weather-display'),
    document.querySelector('.weather-max-val'),
    document.querySelector('.weather-min-val'),
  ];

  // side info - aside - caching
  const [temperatureFeelText, humidityText, overcastText, windText] = [
    document.querySelector('.temp-val'),
    document.querySelector('.humidity-val'),
    document.querySelector('.overcast-val'),
    document.querySelector('.wind-val'),
  ];

  // Destructuring and populating

  // main weather info - article - populating
  const { location, date, tempNow, weatherImg, tempMax, tempMin } =
    weatherObject.mainWeather;

  [
    locationText.textContent,
    dateText.textContent,
    tempText.textContent,
    weatherDisplayDiv.innerHTML,
    tempMinText.textContent,
    tempMaxText.textContent,
  ] = [location, date, tempNow, weatherImg, tempMax, tempMin];

  // side info - aside
  const { temperatureFeeling, humidity, overcast, wind } =
    weatherObject.sideInfo;
  [
    temperatureFeelText.textContent,
    humidityText.textContent,
    overcastText.textContent,
    windText.textContent,
  ] = [temperatureFeeling, humidity, overcast, wind];
}

function enableEventListeners() {
  // Cache DOM
  const searchButton = document.querySelector('.search');
  const closeErrorBtn = document.querySelector('.close');
  // Event Listeners
  searchButton.addEventListener('click', populateDOM);
  closeErrorBtn.addEventListener('click', showErr);
}

export { showErr, enableEventListeners };
