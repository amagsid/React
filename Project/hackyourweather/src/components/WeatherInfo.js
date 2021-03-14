const WeatherDescription = ({ city: { weather } }) => {
  return (
    <div>
      <h4>{weather[0].main}</h4>
      <h5>{weather[0].description}</h5>
    </div>
  );
};

const WeatherInfo = ({ city, name, country }) => {
  return (
    <div>
      <h3>
        {name}, {country}
      </h3>
      <WeatherDescription city={city} />
    </div>
  );
};

export default WeatherInfo;
