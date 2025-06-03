let apiKey = "Your_API_KEY";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="


const input = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherImg = document.getElementById('weatherImg');
const home = document.querySelector('.home');
const error = document.querySelector('.error');
const weather = document.querySelector('.weather');


async function currentWeather(cityName){
      
     await fetch('./config.json').then(res=> res.json()).then(config => apiKey = config.apiKey);
     const weatherReport = await fetch(apiUrl+`${cityName}`+`&appid=${apiKey}`+`&units=metric`);
    
     if(weatherReport.status == 404){
        home.style.display = "block";
       error.style.display = "block";
       weather.style.display = "none";
     }else{
    const data = await weatherReport.json();
     
    document.getElementById('description').innerHTML = data.weather[0].description;
    document.querySelector('.temp h1').innerHTML = Math.floor(data.main.temp);
    document.getElementById('cityname').innerHTML = data.name;
    document.getElementById('cityname').style.color = "#fd8f01";
    document.getElementById('humidityper').innerHTML = data.main.humidity + ' %';
    document.getElementById('windspeed').innerHTML = Math.floor(data.wind.speed)  + ' M/S';

     if(data.weather[0].main == "Clouds"){
           weatherImg.src = "./images/cloudy.gif"
     }else if(data.weather[0].main == "Clear"){
           weatherImg.src = "./images/sun.gif"
     }else if(data.weather[0].main == "Drizzle"){
          weatherImg.src = "./images/drizzle.gif"
     }else if(data.weather[0].main == "Rain"){
           weatherImg.src = "./images/rain.gif"
     }else if(data.weather[0].main == "thunderstorm"){
           weatherImg.src = "./images/storm.gif"
     }else if(data.weather[0].main == 'snow'){
           weatherImg.src = "./images/snow.gif"
     }
     home.style.display = "none";
     error.style.display = "none";
     weather.style.display = "flex";
     }
     
};

searchBtn.addEventListener('click',()=>{
    currentWeather(`${input.value}`)
    input.value = "";
});

document.querySelector('.home button').addEventListener('click',()=>{
    home.style.display = "none"
    weather.style.display = "flex"
    document.getElementById('cityname').innerHTML = "Enter city name to check current weather"
    document.getElementById('cityname').style.color = "#fd6050"});