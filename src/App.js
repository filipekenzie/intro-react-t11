import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Olá, devs!!!</div>
        <p>M3 - React</p>
        <Card />
        <Profile />
      </header>
    </div>
  );
}

export default App;
