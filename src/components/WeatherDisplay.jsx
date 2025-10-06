import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./WeatherDisplay.css";

function WeatherDisplay({ data }) {
  const date = new Date().toLocaleString();


  const hourlyForecast = Array.from({ length: 6 }, (_, i) => ({
    time: `${10 + i}am`,
    temp: Math.round(data.main.temp + i - 2),
    condition: "Cloudy",
  }));

  // Dummy Weekly Forecast (replace later with OneCall API)
  const weeklyForecast = [
    { day: "Thu", temp: "19 / 10°C", condition: "Overcast" },
    { day: "Fri", temp: "18 / 13°C", condition: "Rain" },
    { day: "Sat", temp: "18 / 12°C", condition: "Rain" },
    { day: "Sun", temp: "17 / 11°C", condition: "Cloudy" },
    { day: "Mon", temp: "20 / 12°C", condition: "Sunny" },
  ];

  // Map Integration
  useEffect(() => {
    const map = L.map("city-map").setView([data.coord.lat, data.coord.lon], 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    L.marker([data.coord.lat, data.coord.lon])
      .addTo(map)
      .bindPopup(`${data.name}, ${data.sys.country}`)
      .openPopup();

    return () => {
      map.remove();
    };
  }, [data]);

  return (
    <div className="weather-dashboard">
      {/* LEFT SECTION */}
      <div className="left-section">
        <div className="weather-card large">
          <h3>
            {data.name}, {data.sys.country}
          </h3>
          <p className="date">{date}</p>
          <h2 className="temp">{Math.round(data.main.temp)}°C</h2>
          <p className="feels">
            Feels like {Math.round(data.main.feels_like)}°C
          </p>
          <p className="condition">{data.weather[0].description}</p>
        </div>

        {/* HOURLY FORECAST */}
      <div className="hourly">
        <h3>Hourly Forecast</h3>
        <div className="hourly-list">
          {hourlyForecast.map((h, idx) => (
            <div key={idx} className="hourly-card">
              <p>{h.time}</p>
              <p>{h.temp}°C</p>
              <p>{h.condition}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WEEKLY FORECAST */}
      <div className="forecast">
        <h3>7-Day Forecast</h3>
        <div className="forecast-list">
          {weeklyForecast.map((d, idx) => (
            <div key={idx} className="forecast-card">
              <h4>{d.day}</h4>
              <p>{d.temp}</p>
              <p>{d.condition}</p>
            </div>
          ))}
        </div>
      </div>

        <div className="weather-card map-card">
          <h4>Radar & Maps</h4>
          <div id="city-map" className="map-frame"></div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="right-section">
        <div className="weather-card">
          <h4>Pressure</h4>
          <p>{data.main.pressure} mb</p>
        </div>
        <div className="weather-card">
          <h4>Humidity</h4>
          <p>{data.main.humidity}%</p>
        </div>
        <div className="weather-card">
          <h4>Wind</h4>
          <p>{data.wind.speed} m/s</p>
        </div>
        <div className="weather-card">
          <h4>Sunrise & Sunset</h4>
          <p>🌅 {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
          <p>🌇 {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
        </div>
        <div className="weather-card">
          <h4>Dew Point</h4>
          <p>19°C</p>
        </div>
        <div className="weather-card">
          <h4>AQI</h4>
          <p>Good (34)</p>
        </div>
        <div className="weather-card">
          <h4>UV Index</h4>
          <p>Moderate (4)</p>
        </div>
        <div className="weather-card">
          <h4>🌕 Full Moon</h4>
          <p>Moonrise: 17:29</p>
          <p>Moonset: 05:06</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;