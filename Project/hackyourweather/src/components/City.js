import WeatherInfo from "./WeatherInfo";

const City = ({
  city,
  city: { name },
  city: {
    sys: { country },
  },
}) => {
  return (
    <div className="city">
      <WeatherInfo city={city} name={name} country={country} />
    </div>
  );
};

export default City;
