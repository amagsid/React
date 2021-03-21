import "./App.css";
import weatherData from "./city-weather.json";

import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <h1> Weather</h1>
      <Search />
    </div>
  );
}

export default App;
