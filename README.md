# OpenWeather Clone - React + Vite

This template provides a minimal setup to get React working in Vite with HMR and modern development features.

This project is a **weather dashboard** built with **React + Vite**, fetching real-time weather data from **[OpenWeather API](https://openweathermap.org/api)**. It displays current weather, hourly forecasts, 7-day forecasts, and interactive maps.

---

## Features

- **Current Weather** – Displays city name, temperature, feels-like temperature, and weather description.  
- **Hourly Forecast** – Shows the next 6 hours with proper AM/PM formatting.  
- **7-Day Forecast** – Shows daily maximum and minimum temperatures along with conditions.  
- **Interactive Map** – Uses [Leaflet](https://leafletjs.com/) to display city location with a marker and popup.  
- **Additional Weather Details** – Pressure, humidity, wind speed, sunrise/sunset, dew point, AQI, UV index, and moon phases.  
- **Search Functionality** – Search any city and display weather instantly.  
- **Loading and Error Handling** – Animated loading indicator and user-friendly error messages.

---

## Libraries Used

- [React](https://reactjs.org/) – Frontend library for building UI  
- [Vite](https://vitejs.dev/) – Development server and bundler  
- [Axios](https://axios-http.com/) – HTTP client for API requests  
- [Leaflet](https://leafletjs.com/) – Interactive maps  
- [Leaflet CSS](https://leafletjs.com/reference.html) – Map styling  
- [OpenWeather API](https://openweathermap.org/api) – `/weather` and `/onecall` endpoints for real-time weather data  

---

## Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) >= 16  
- npm or yarn  

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/openweather-clone.git

2. Navigate to the project folder:
cd openweather-clone

3. Install dependencies:
npm install
# or
yarn

4. Add your OpenWeather API key in App.jsx:
const API_KEY = 'YOUR_API_KEY_HERE';

5. Start the development server:
npm run dev
# or
yarn dev

6. Open http://localhost:5173 in your browser.
```
---

## How It Works

- **Search City** – Enter a city name in the search bar.  
- **Fetch Weather Data** – The app first calls /weather to get coordinates, then /onecall for hourly and daily forecast data.
- **Display Dashboard** – Current weather, hourly forecast, 7-day forecast, and additional details are displayed in styled cards.
- **Map Integration** – Leaflet shows city location on an interactive map.
- **Error Handling** – PDisplays a friendly error message if the city is not found.  
- **Loading State** – Shows a pulsing animation while data is being fetched.

---
## Future Enhancements

- **Dynamic Weather Icons** – Show intuitive icons for weather conditions (sunny, cloudy, rain, etc.).
- **Dark Mode Toggle** – Allow users to switch between light and dark themes.
- **Geolocation Support** – Automatically fetch weather for the user’s current location.

- **Interactive AQI and Pollution Layers** – Display air quality and pollution information visually on the map.

- **Hourly Forecast Slider** – Smooth swipeable slider for hourly forecasts.

- **AI Weather Assistant** – Generate automatic weather summaries, tips, or insights using AI.

---
## Live Demo

Check out the live demo: 
[https://ashwini-weather-app.netlify.app/](https://ashwini-weather-app.netlify.app/)