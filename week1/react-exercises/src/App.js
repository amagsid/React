import logo from "./logo.svg";
import "./App.css";
import HobbyList from "./1. ExtremeHobbies";
import CustomerServiceEL from "./2. Perfect-customer-service";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <HobbyList />
        <CustomerServiceEL />
      </header>
    </div>
  );
}

export default App;
