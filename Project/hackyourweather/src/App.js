import "./App.css";
import weatherData from "./city-weather.json";
import City from "./components/City";

function App() {
  return (
    <div className="App">
      <h1> Weather</h1>
      {weatherData.map((city) => {
        return <City key={city.id} city={city} />;
      })}
    </div>
  );
}

export default App;
