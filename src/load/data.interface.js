export default class Weather {
  constructor(
    location,
    country,
    weather,
    time,
    temp,
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
    this.temp = temp;
    this.tempSense = tempSense;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
    this.humidity = humidity;
    this.overcast = overcast;
    this.wind = wind;
  }

  get time() {
    return new Date(this.time * 1000).toLocaleString();
  }

  get mainWeather() {
    return [this.location, this.country, this.temp, this.tempMax, this.tempMin];
  }

  get sideInfo() {
    return [this.tempSense, this.humidity, this.wind];
  }
}
