import "./App.css";
import Search from "./components/Search";
import CityForecast from "./components/CityForecast";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={Search} />
          <Route path="/:cityId" exact component={CityForecast} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
