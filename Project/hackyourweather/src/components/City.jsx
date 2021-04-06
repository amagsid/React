import WeatherInfo from "./WeatherInfo";

const City = ({ weather, setData }) => {
  return <WeatherInfo setData={setData} weather={weather} />;
};

export default City;
