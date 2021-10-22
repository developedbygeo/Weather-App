import Weather from './data.interface';

function handleError(err) {
  const errorMessage = document.querySelector('.error');
  const errorDiv = document.querySelector('.error-msg');
  errorMessage.textContent = err;
  errorDiv.classList.add('error-msg-active');
}

function removeError() {
  const errorDiv = document.querySelector('.error-msg');
  errorDiv.classList.remove('error-msg-active');
}

function handleMainData(data) {
  const {
    name,
    sys: { country },
    main: {
      temp,
      feels_like: feelsLike,
      temp_min: tempMin,
      temp_max: tempMax,
      humidity,
    },
    wind: { speed },
    dt,
    clouds: { all: overcast },
  } = data;
  const { main: description, icon, description: weatherDesc } = data.weather[0];
  const extractedData = [
    name,
    country,
    description,
    dt,
    temp,
    icon,
    feelsLike,
    tempMin,
    tempMax,
    humidity,
    overcast,
    speed,
    weatherDesc,
  ];
  const weatherObject = new Weather(...extractedData);
  return weatherObject;
}
async function getData(query) {
  const key = process.env.API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${key}`;
  try {
    const response = await fetch(url, { mode: 'cors' });
    if (!response.ok) handleError(`${query} not found!`);
    const data = handleMainData(await response.json());
    return data;
  } catch (error) {
    handleError(`Oops, something went wrong!`);
    return null;
  }
}
export { getData, removeError };
