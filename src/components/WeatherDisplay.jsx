import "./WeatherDisplay.css";

function WeatherDisplay({ data }) {
  const date = new Date().toLocaleString();

  // Dummy forecast data (replace later with OneCall API)
  const hourlyForecast = Array.from({ length: 6 }, (_, i) => ({
    time: `${10 + i}am`,
    temp: Math.round(data.main.temp + i - 2),
    condition: "cloudy"
  }));

  const weeklyForecast = [
    { day: "Thu", temp: "19 / 10°C", condition: "Overcast" },
    { day: "Fri", temp: "18 / 13°C", condition: "Rain" },
    { day: "Sat", temp: "18 / 12°C", condition: "Rain" },
    { day: "Sun", temp: "17 / 11°C", condition: "Cloudy" },
    { day: "Mon", temp: "20 / 12°C", condition: "Sunny" },
  ];

  return (
    <div className="weather-container">
      <div className="weather-info">
        <p className="date">{date}</p>
        <h2>
          {data.name}, {data.sys.country}
        </h2>
        <p className="temp">{Math.round(data.main.temp)}°C</p>
        <p className="feels">Feels like {Math.round(data.main.feels_like)}°C</p>
        <p className="condition">{data.weather[0].description}</p>
        <div className="extra">
          <p>💧 Humidity: {data.main.humidity}%</p>
          <p>💨 Wind: {data.wind.speed} m/s</p>
        </div>
      </div>

      {/* Hourly Forecast */}
      <div className="hourly">
        {hourlyForecast.map((h, idx) => (
          <div key={idx} className="hourly-card">
            <p>{h.time}</p>
            <p>{h.temp}°C</p>
            <p>{h.condition}</p>
          </div>
        ))}
      </div>

      {/* 7-Day Forecast */}
      <div className="forecast">
        {weeklyForecast.map((d, idx) => (
          <div key={idx} className="forecast-card">
            <h4>{d.day}</h4>
            <p>{d.temp}</p>
            <p>{d.condition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherDisplay;
