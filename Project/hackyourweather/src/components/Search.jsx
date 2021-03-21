import { useState, useEffect } from "react";
import City from "./City.jsx";

const Search = () => {
  const [city, setCity] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const [weather, setWeather] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const ApiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  const getWeather = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`
    )
      .then((res) => res.json())
      .then((weather) => {
        console.log(weather);
        setWeather(weather);
      })
      .catch((err) => setError(err));
  };

  useEffect(() => {
    getWeather();
  }, [clickCount]);

  return (
    <div className="weather-app">
      <div className="weather-app-form">
        <input
          type="text"
          placeholder="search city.."
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="button"
          onClick={() => setClickCount(clickCount + 1)}
        >
          <span>Search </span>
        </button>
      </div>

      {Object.keys(weather).length > 2 && <City weather={weather} />}
    </div>
  );
};

export default Search;
