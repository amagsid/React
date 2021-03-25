import "./App.css";
import HobbyList from "./components/ExtremeHobbies";
import CustomerServiceEL from "./components/Perfect-customer-service";
import Counter from "./components/HigherThan";

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
