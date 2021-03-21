const WeatherDescription = ({
  weather: { name: city },
  weather: { weather: description },
  weather: {
    sys: { country },
  },
}) => {
  // const main = weather[0].main;
  const condition = description[0];
  return (
    <div className="description">
      <h3 className="city-country">
        {city}, <span> {country} </span>
      </h3>
      <p>{condition.main}</p>
      <p>{condition.description}</p>
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
      <p> min temp: {toCelcius(min)} </p>
      <p> max temp: {toCelcius(max)} </p>
      <p>
        location: {lat} , {lon}
      </p>
    </div>
  );
};

const WeatherInfo = ({ weather }) => {
  console.log(weather);
  return (
    <div className="weather">
      <WeatherDescription weather={weather} />
      <TempInfo weather={weather} />
    </div>
  );
};

export default WeatherInfo;
