/* eslint-disable camelcase */
import showErr from '../init/util.functions';
import Weather from './data.interface';

function handleError(err) {
  const errorMessage = document.querySelector('.error');
  errorMessage.textContent = err;
  showErr();
}
async function handleData(data) {
  const { temp, feels_like, humidity, temp_min, temp_max } = data.main;
  const [{ description }, { dt }, { country }, { speed }, { name }, { all }] = [
    data.weather[0],
    data,
    data.sys,
    data.wind,
    data,
    data.clouds,
  ];
  const extractedData = [
    name,
    country,
    description,
    dt,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    all,
    speed,
  ];
  const weatherObject = new Weather(...extractedData);
  return weatherObject;
}
// TODO add populateDOM in eventListeners to proceed

export default async function getData(query) {
  const key = process.env.API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${key}`;
  try {
    const response = await fetch(url, { mode: 'cors' });
    if (!response.ok) handleError(`${query} not found!`);
    const data = await response.json();
    // handleData(data);
    // TODO this will be handled through populateDOM
  } catch (error) {
    handleError(`Oops, something went wrong!`);
    return null;
  }
  return { getData };
}
