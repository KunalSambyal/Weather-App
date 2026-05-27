const form = document.getElementById("form");
const weatherDisplay = document.getElementById("weather");
const humidityDisplay = document.getElementById("humidity");
const tempDisplay = document.getElementById("currentTemp");
const windSpeedDisplay = document.getElementById("windSpeed");

function updateDisplay(weather, humidity, temp, windSpeed) {
    weatherDisplay.textContent = `Weather: ${weather}`;
    humidityDisplay.textContent = `Humidity: ${humidity}`;
    tempDisplay.textContent = `Temp: ${temp} C`;
    windSpeedDisplay.textContent = `Wind: ${windSpeed}`;
}

async function getWeather(event) {
    event.preventDefault();
    try {
        const cityName = document.getElementById("cityName").value.trim();

        const geoResponse = await fetch(`/api/geo?city=${cityName}`);
        if (!geoResponse.ok) {
            window.alert("Something went wrong while fetching resources");
            throw new Error("Not ok!");
        }

        const geoData = await geoResponse.json();
        if (geoData.length === 0) {
            window.alert("City not found!");
            throw new Error("City not found");
        }

        const lat = geoData[0].lat;
        const lon = geoData[0].lon;

        const weatherResponse = await fetch(
            `/api/weather?lat=${lat}&lon=${lon}`,
        );
        if (!weatherResponse.ok) {
            throw new Error("Weather API request failed");
        }

        const weatherData = await weatherResponse.json();

        const weather = weatherData.weather[0].main;
        const humidity = weatherData.main.humidity;
        const temp = weatherData.main.temp;
        const windSpeed = weatherData.wind.speed;

        updateDisplay(weather, humidity, temp, windSpeed);
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
}

form.addEventListener("submit", (event) => {
    getWeather(event);
});
