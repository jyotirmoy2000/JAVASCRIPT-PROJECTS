const searchForm = document.querySelector("[data-searchForm]");
const searchInput = document.querySelector("[data-searchInput]");
const weatherInfoCard = document.querySelector(".weather-details-section");
const errorCard = document.querySelector(".error");

const API_KEY = "8c073d95bab3e57fd49acace34b00423";
fetchWeatherDetails("bongaon");


async function fetchWeatherDetails(city){
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        // console.log(data);
        renderWeatherInfo(data);
    } catch (error) {
    //    have to think more
    }
}

function renderWeatherInfo(data){
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const weatherTemp = document.querySelector("[data-weatherTemp]");
    const weatherLocation = document.querySelector("[data-weatherLocation]");
    const humidity = document.querySelector("[data-Humidity]");
    const windspeed = document.querySelector("[data-Windspeed]");

    weatherTemp.innerText = `${Math.round(data?.main?.temp)}°C`;
    weatherLocation.innerText = data?.name;
    humidity.innerText = `${data?.main?.humidity}%`;
    windspeed.innerText = `${data?.wind?.speed}km/h`;

    if(data?.weather[0]?.main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data?.weather[0]?.main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data?.weather[0]?.main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data?.weather[0]?.main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data?.weather[0]?.main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    weatherInfoCard.classList.add("active");
   
    
}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let cityName = searchInput.value;
    if(cityName === "") return;
    else fetchWeatherDetails(cityName);
})