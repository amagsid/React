import { useState, useEffect } from "react";
import City from "./City.jsx";
import Feedback from "./Feedback";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=`;
  const ApiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const [clickCount, setClickCount] = useState(0);
  const [city, setCity] = useState(null || []);

  const useFetch = (url) => {
    const [data, setData] = useState(null || []);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(null);

    useEffect(() => {
      if (city) {
        setLoading(true);
        fetch(url)
          .then((res) => {
            if (res.ok) return res.json();
            throw res;
          })
          .then((data) => {
            setData((oldWeather) => [...oldWeather, data]);
          })
          .catch((err) => setError(err))
          .finally(() => setLoading(false));
      }
    }, [clickCount]);

    //setTimeout on  error feedback
    useEffect(() => {
      const timeout = setTimeout(() => {
        setError(null);
      }, 2000);

      return () => clearTimeout(timeout);
    }, [hasError]);

    // if (data.find((city) => id === city.id)) {
    //   console.log(data);
    // }

    return { data, setData, isLoading, hasError };
  };

  const { data, isLoading, hasError } = useFetch(
    `${url}${city}&appid=${ApiKey}`
  );

  return (
    <div className="weather-app">
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
        {city.length === 0 && <FaSearch className="search-icon" />}

        <input
          type="text"
          placeholder="       search city.."
          onChange={(e) => setCity(e.target.value)}
        />

        {city.length > 0 && (
          <button
            className="button"
            onClick={() => setClickCount(clickCount + 1)}
          >
            <span>show weather </span>
          </button>
        )}
      </div>
      {/* error hndlling */}
      {hasError && hasError.status === 404 && (
        <Feedback
          className={"feedbcak error"}
          text={"Please enter a valid city name"}
        />
      )}

      {isLoading && <Feedback className={"loading"} loading={true} />}
      {data && <City weather={data} />}
    </div>
  );
};

export default Search;
