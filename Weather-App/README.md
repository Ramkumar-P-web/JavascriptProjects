# 🌤️ Weather Forecast App

A simple and visually appealing Weather App built with **HTML**, **CSS**, and **JavaScript**, which uses animated `.gif` icons to reflect current weather conditions like ☀️ Clear, 🌧️ Rain, 🌩️ Storm, ☁️ Cloudy, and more.

---

## 🚀 Features

- 🔍 Search weather by **city name**
- 📊 Displays:
  - Temperature (°C)
  - Wind Speed (km/h)
  - Humidity (%)
  - Small weather description (e.g., "light rain", "clear sky")
- 🌄 Dynamically changing **main GIF icon** based on weather (e.g., sun.gif, storm.gif)
- ⛔ Redirects to home with a message if **invalid city name** is entered
- ⚠️ Currently has **some known bugs** (see [To Do](#-to-do))

---

## 🔧 Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- [WeatherAPI](https://openweathermap.org/api) (Free Weather Data)

---

## 🖼️ Weather Icons

Animated `.gif` files are used as weather condition icons. These are stored in the `icons/` folder and are dynamically rendered based on API response.

---

## 🔑 Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/Ramkumar-P-web/JavascriptProjects/tree/master/Weather-App
   cd weather-app


## 🔐 API Key Setup

1. Create a `config.json` file in the root directory:
```json
{
  "apiKey": "your_api_key_here"
}