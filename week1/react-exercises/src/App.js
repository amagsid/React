import "./App.css";
import HobbyList from "./1. ExtremeHobbies";
import CustomerServiceEL from "./2. Perfect-customer-service";
import Counter from "./3.HigherThan";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HobbyList />
        <CustomerServiceEL />
        <Counter />
      </header>
    </div>
  );
}

export default App;
