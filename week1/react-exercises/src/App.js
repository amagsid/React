import logo from "./logo.svg";
import "./App.css";
import HobbyList from "./1. ExtremeHobbies";
import CustomerServiceEL from "./2. Perfect-customer-service";
import Counter from "./3.HigherThan";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <HobbyList />
        <CustomerServiceEL />
        <Counter />
      </header>
    </div>
  );
}

export default App;
