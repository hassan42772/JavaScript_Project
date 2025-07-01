let temp = document.querySelector(".Temperature");
let humi = document.querySelector(".hummidity");
let Status = document.querySelector(".status");
let wind = document.querySelector(".WindSpeed");
let City = document.querySelector("#text");
let Search = document.querySelector(".Search");
let CName = document.querySelector(".cityname");
let press = document.querySelector(".pressure");


Search.addEventListener('click' , Api);
City.addEventListener('keypress' , Api )



async function Api() {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City.value}&appid=44baee82b64c09284b8e60aacc646647`)
    let data = await response.json();
    let WeatherStatus = data.weather[0].main
    Status.innerHTML = WeatherStatus
  
    let temperature = Math.floor(data.main.temp - 273.15)
    temp.innerHTML = temperature + "°C"
    let Humidity = data.main.humidity
    humi.innerHTML = Humidity + "%"
    let WindSpeed = data.wind.speed
    wind.innerHTML = WindSpeed + "Km/h"
    let CityName = data.name
    CName.innerHTML = CityName
    let pressure = data.main.pressure
    press.innerHTML = pressure + " Pa"
}
async function ApiResponse() {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bahawalnagar&appid=44baee82b64c09284b8e60aacc646647`)
    let data = await response.json();
    let WeatherStatus = data.weather[0].main
    Status.innerHTML = WeatherStatus
    let temperature = Math.floor(data.main.temp - 273.15)
    temp.innerHTML = temperature + "°C"
    let Humidity = data.main.humidity
    humi.innerHTML = Humidity + "%"
    let WindSpeed = data.wind.speed
    wind.innerHTML = WindSpeed + "Km/h"
    let CityName = data.name
    CName.innerHTML = CityName
    let pressure = data.main.pressure
    press.innerHTML = pressure + " Pa"

}
ApiResponse()