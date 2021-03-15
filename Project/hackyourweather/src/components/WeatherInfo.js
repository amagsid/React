const WeatherDescription = ({ city: { weather } }) => {
  const main = weather[0].main;
  const description = weather[0].description;
  return (
    <>
      <h3>{main}</h3>
      <h4>{description}</h4>
    </>
  );
};

const TempInfo = ({
  city: {
    main: { temp_max },
  },
  city: {
    main: { temp_min },
  },
}) => {
  const toCelcius = (temp) => Math.floor(temp - 273.15);

  return (
    <>
      <h4> min temp: {toCelcius(temp_min)}</h4>
      <h4> max temp: {toCelcius(temp_max)}</h4>
    </>
  );
};

const WeatherInfo = ({ city, name, country }) => {
  return (
    <>
      <h2>
        {name}, {country}
      </h2>
      <WeatherDescription city={city} />
      <TempInfo city={city} />
    </>
  );
};

export default WeatherInfo;
