import axios from "axios";
import Counter from "./components/Counter";
import logo from "./assets/logo.svg";

import "./App.css";

function App() {
  const load = () => {
    axios
      .get("http://localhost:3310/api/items")
      .then((res) => console.info(res.data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React !</p>

        <Counter />
        <button onClick={() => load()} type="button">
          load
        </button>

        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
