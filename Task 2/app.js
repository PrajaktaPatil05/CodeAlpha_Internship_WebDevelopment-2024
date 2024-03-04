
const apiKey = "c02befef0ffe12f42e2ab680158424d6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
   
    const url = `${apiUrl}${city}&appid=${apiKey}`;
    const response = await fetch(url);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather-app").style.display = "none";
    }else{

        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "Images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "Images/clear.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "Images/rain.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "Images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "Images/mist.png";
        }

        document.querySelector(".weather-app").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

    
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});


const backgroundImages = [
    "url('Images/bg-img/img1.jpg')",
    "url('Images/bg-img/img2.jpg')",
    "url('Images/bg-img/img3.jpg')",
    "url('Images/bg-img/img4.jpg')",
    "url('Images/bg-img/img5.jpg')",
    "url('Images/bg-img/img7.jpg')",
    "url('Images/bg-img/img8.jpg')",
    "url('Images/bg-img/img9.jpg')",
    "url('Images/bg-img/img10.jpg')"    
];


function setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    document.body.style.backgroundImage = backgroundImages[randomIndex];
}


setRandomBackground();

setInterval(setRandomBackground, 5000);
