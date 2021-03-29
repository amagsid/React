import WeatherInfo from "./WeatherInfo";

const City = ({ weather, setData }) => {
  return (
    <div className="city">
      <WeatherInfo setData={setData} weather={weather} />
    </div>
  );
};

export default City;
