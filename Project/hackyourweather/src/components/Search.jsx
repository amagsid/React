import { useState, useEffect, useRef } from "react";
import City from "./City.jsx";
import Feedback from "./Feedback";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [city, setCity] = useState(null);
  const [clickCount, setClickCount] = useState(0);
  const [weather, setWeather] = useState(null);
  const [isLoading, setLoading] = useState(false);
  // error handling
  const [hasError, setError] = useState(null);

  const ApiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  //data fetching//
  const getWeather = () => {
    setLoading(true);
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`
    )
      .then((res) => {
        if (res.ok) return res.json();
        else throw res;
      })
      .then((weather) => {
        setWeather(weather);
        setLoading(false);
      })
      .catch((err) => {
        console.error("error fetching data", err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //---functionality---//
  // fetch useEffect
  useEffect(() => {
    if (city) getWeather();
    else setError({ status: 400 });
  }, [clickCount]);

  //setTimeout on  error feedback
  useEffect(() => {
    const timeout = setTimeout(() => {
      setError(null);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [hasError]);

  return (
    <div className="weather-app">
      {hasError && hasError.status === 404 && (
        <Feedback
          className={"feedbcak error"}
          text={"Please enter a valid city name"}
        />
      )}

      {hasError && hasError.status === 400 && clickCount > 0 && (
        <Feedback
          className={"feedbcak error"}
          text={"Please provide a city name to get the weather results"}
        />
      )}

      {city ? (
        <Feedback
          className={"feedbcak start"}
          text={"click on show weather to see results "}
        />
      ) : (
        <Feedback
          className={"feedbcak start"}
          text={"enter a city name to show weather "}
        />
      )}
      {/* //form */}
      <div className="weather-app-form">
        {!city ? <FaSearch className="search-icon" /> : null}

        <input
          type="text"
          placeholder="       search city.."
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          className="button"
          onClick={() => setClickCount(clickCount + 1)}
        >
          <span>show weather </span>
        </button>
      </div>
      {isLoading && <Feedback className={"loading"} loading={true} />}
      {weather && <City weather={weather} />}
    </div>
  );
};

export default Search;
