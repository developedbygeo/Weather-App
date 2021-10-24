import { removeError, getData } from './api';
import { verifyQuery, handleBackgroundChanges } from './utils';
import { loadAnimations, ApiAnimations } from './animations';

function populateDOM(weatherObject) {
  if (!weatherObject) return;

  // Cache DOM
  // main weather info - article - caching
  const [
    locationText,
    dateText,
    tempText,
    weatherDisplayDiv,
    weatherDescText,
    tempMinText,
    tempMaxText,
  ] = [
    document.querySelector('.location-wrapper h1'),
    document.querySelector('.date-wrapper p'),
    document.querySelector('.temp-wrapper h2'),
    document.querySelector('.weather-display'),
    document.querySelector('.desc'),
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
  const {
    location,
    date,
    tempNow,
    weatherImg,
    WeatherDescription,
    tempMax,
    tempMin,
  } = weatherObject.mainWeather;

  [
    locationText.textContent,
    dateText.textContent,
    tempText.textContent,
    weatherDisplayDiv.innerHTML,
    weatherDescText.textContent,
    tempMinText.textContent,
    tempMaxText.textContent,
  ] = [
    location,
    date,
    tempNow,
    weatherImg,
    WeatherDescription,
    tempMax,
    tempMin,
  ];

  // side info - aside
  const { temperatureFeeling, humidity, overcast, wind } =
    weatherObject.sideInfo;
  [
    temperatureFeelText.textContent,
    humidityText.textContent,
    overcastText.textContent,
    windText.textContent,
  ] = [temperatureFeeling, humidity, overcast, wind];

  // background rendering
  handleBackgroundChanges(weatherObject.weatherImageChange);
}
async function init() {
  const data = await getData('Amsterdam');
  populateDOM(data);
}

export default function enableEventListeners() {
  // Cache DOM
  const searchButton = document.querySelector('.search');
  const searchInput = document.querySelector('#location');
  const closeErrorBtn = document.querySelector('.close');
  const form = document.querySelector('form');
  // Event Listeners
  window.addEventListener('load', init);
  window.addEventListener('load', loadAnimations);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
  // creates new anim. timeline, reverses/populatesDOM on successfull query to the api
  searchButton.addEventListener('click', async (e) => {
    const tl = new ApiAnimations();
    e.preventDefault();
    tl.enable();
    if (searchInput.value === '') return;
    const data = await getData(verifyQuery());
    setTimeout(() => {
      tl.reverse();
      populateDOM(data);
    }, 3000);
  });
  closeErrorBtn.addEventListener('click', removeError);
}
