import "./App.css";
import weatherData from "./city-weather.json";
import City from "./components/City";

function App() {
  return (
    <div className="App">
      {weatherData.map((city) => {
        console.log(city);
        return <City city={city} />;
      })}
    </div>
  );
}

export default App;
