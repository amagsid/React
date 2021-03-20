import { useState, useEffect } from "react";

const Search = () => {
  const [city, setCity] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const ApiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  console.log(ApiKey);

  const getWeather = () => {
    setLoading(true);
    fetch(
      "api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
    )
      .then((res) => res.json())
      .then((joke) => {
        setLoading(false);
      })
      .catch((err) => setError(err));
  };

  useEffect(() => {});

  return (
    <div>
      <input type="text" onChange={(e) => setCity(e.target.value)} />
      <button onClick={() => console.log("hey")}>Search</button>
    </div>
  );
};

export default Search;
