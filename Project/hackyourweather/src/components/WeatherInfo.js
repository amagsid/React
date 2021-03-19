const WeatherDescription = ({ city: { weather } }) => {
  const main = weather[0].main;
  const description = weather[0].description;
  return (
    <div className="description">
      <h3>{main}</h3>
      <p>{description}</p>
    </div>
  );
};

const TempInfo = ({
  city: {
    main: { temp_max, temp_min },
  },
  city: {
    coord: { lat, lon },
  },
}) => {
  const toCelcius = (temp) => Math.floor(temp - 273.15);

  return (
    <div className="temp">
      <p> min temp: {toCelcius(temp_min)}</p>
      <p> max temp: {toCelcius(temp_max)}</p>
      <p>
        location: {lat} , {lon}
      </p>
    </div>
  );
};

const WeatherInfo = ({ city, name, country }) => {
  return (
    <div className="weather">
      <h2>
        {name}, {country}
      </h2>
      <WeatherDescription city={city} />
      <TempInfo city={city} />
    </div>
  );
};

export default WeatherInfo;
