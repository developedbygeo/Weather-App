export default class Weather {
  constructor(
    location,
    country,
    weather,
    time,
    temp,
    icon,
    tempSense,
    tempMin,
    tempMax,
    humidity,
    overcast,
    wind
  ) {
    this.location = location;
    this.country = country;
    this.weather = weather;
    this.time = time;
    this.temp = temp.toFixed(1);
    this.icon = icon;
    this.tempSense = tempSense.toFixed(1);
    this.tempMin = tempMin.toFixed(1);
    this.tempMax = tempMax.toFixed(1);
    this.humidity = humidity;
    this.overcast = overcast;
    this.wind = wind;
  }

  get timeAndDate() {
    return new Date(this.time * 1000).toLocaleString();
  }

  get weatherImageTitle() {
    return `content-wrapper-${this.weather.toLowerCase()}`;
  }

  get windSpeedKM() {
    return Math.round((this.wind / 1000) * 3600);
  }

  get loc() {
    return `${this.location}, ${this.country} `;
  }

  get weatherIcon() {
    return `<img src="http://openweathermap.org/img/w/${this.icon}.png" alt="icon-representing-weather">`;
  }

  get mainWeather() {
    return {
      location: this.loc,
      date: this.timeAndDate,
      tempNow: this.temp,
      weatherImg: this.weatherIcon,
      tempMax: this.tempMax,
      tempMin: this.tempMin,
    };
  }

  get sideInfo() {
    return {
      temperatureFeeling: this.tempSense,
      humidity: this.humidity,
      overcast: this.overcast,
      wind: this.windSpeedKM,
    };
  }

  get temperatures() {
    return {
      current: this.temp,
      min: this.tempMin,
      max: this.tempMax,
    };
  }
}
