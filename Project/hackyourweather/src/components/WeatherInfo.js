import { RiDeleteBin2Fill } from "react-icons/ri";
import { AiOutlineAreaChart } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const WeatherDescription = ({
  weather: { name: city },
  weather: { weather: description },
  weather: {
    sys: { country },
  },
}) => {
  const condition = description[0];
  return (
    <div className="description">
      <h3 className="city-country">
        {city}, <span> {country} </span>
      </h3>
      <p className="condition-main">{condition.main}</p>
      <p className="condition-description">{condition.description}</p>
    </div>
  );
};

const TempInfo = ({
  weather: {
    main: { temp_max: max, temp_min: min },
  },
  weather: {
    coord: { lat, lon },
  },
}) => {
  const toCelcius = (temp) => Math.floor(temp - 273.15);

  return (
    <div className="temp">
      <p>
        min temp:
        <span>
          {toCelcius(min)} {"\u00b0"}
        </span>
      </p>
      <p>
        max temp:
        <span>
          {toCelcius(max)} {"\u00b0"}
        </span>
      </p>
      <p>
        location:
        <span>
          {lat} , {lon}
        </span>
      </p>
    </div>
  );
};

const WeatherInfo = ({ weather }) => {
  const [passedWeather, setPassedWeather] = useState(null || []);

  useEffect(() => {
    setPassedWeather(weather);
  }, [weather]);

  return (
    <>
      {passedWeather.map((city) => {
        return (
          <div className="card" id={city.id}>
            <Link style={{ textDecoration: "none" }} to={`/${city.id}`}>
              <div className="weather-info">
                <WeatherDescription weather={city} />

                <TempInfo weather={city} />
                <h5 className={"forecast"}>
                  <span>5-day forecast</span>
                  <AiOutlineAreaChart
                    size={20}
                    className={"chart-icon"}
                  ></AiOutlineAreaChart>
                </h5>
              </div>
            </Link>
            <RiDeleteBin2Fill
              size={30}
              id={city.id}
              onClick={(e) => {
                const id = parseInt(e.target.getAttribute("id"));
                setPassedWeather((currentCities) =>
                  currentCities.filter((city) => city.id !== id)
                );
              }}
              className="delete-icon"
              fontSize="large"
            />
          </div>
        );
      })}
    </>
  );
};

export default WeatherInfo;
