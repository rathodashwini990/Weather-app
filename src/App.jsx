import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import "./App.css";

const API_KEY = '2d03cf6898821fb0a27254752c630073';

function App() {
  const [city, setCity] = useState(localStorage.getItem("lastCity") || "");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (searchCity) => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
      setCity(searchCity);
      localStorage.setItem("lastCity", searchCity);
    } catch (err) {
      setError("City not found. Try again.",err);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeather(city);
    }
  }, []);

  return (
    <div className="app">
      <div className="header">
        <h1>OpenWeather Clone 🌦</h1>
        <SearchBar onSearch={fetchWeather} />
      </div>

      <div className="content">
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        {weather && <WeatherDisplay data={weather} />}
      </div>
    </div>
  );
}

export default App;
