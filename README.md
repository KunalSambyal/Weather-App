# Weather App

A simple weather application built using HTML, CSS, and JavaScript that fetches real-time weather data from the OpenWeather API.

## Features

- Search weather by city name
- Displays:
    - Weather condition
    - Temperature
    - Humidity
    - Wind speed
- Uses OpenWeather Geocoding API to convert city names into coordinates
- Uses OpenWeather Current Weather API for weather data
- Error handling for invalid city names and failed API requests

---

## How It Works

### 1. User enters a city name

Example:

```text
Delhi
```

### 2. Geocoding API request

The app first converts the city name into latitude and longitude.

```javascript
https://api.openweathermap.org/geo/1.0/direct?q=Delhi&limit=1&appid=YOUR_API_KEY
```

Example response:

```json
[
    {
        "name": "Delhi",
        "lat": 28.6517,
        "lon": 77.2219
    }
]
```

### 3. Weather API request

The coordinates are then used to fetch weather data.

```javascript
https://api.openweathermap.org/data/2.5/weather?lat=28.6517&lon=77.2219&appid=YOUR_API_KEY&units=metric
```

### 4. Display weather information

The application extracts and displays:

```javascript
weatherData.weather[0].main;
weatherData.main.temp;
weatherData.main.humidity;
weatherData.wind.speed;
```

---

## Error Handling

The application handles:

- Empty city input
- Invalid city names
- Failed API requests
- Missing weather data

---

## What I Learned

- Fetch API
- Async/Await
- Working with Promises
- JSON parsing
- API integration
- DOM manipulation
- Error handling in JavaScript

---

## Author

Kunal Sambyal
