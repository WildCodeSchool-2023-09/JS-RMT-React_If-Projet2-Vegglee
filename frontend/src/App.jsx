import axios from "axios";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const load = () => {
    axios
      .get("http://localhost:3310/api/items")
      .then((res) => console.info(res.data))
      .catch((error) => console.error(error));
  };
  const load2 = () => {
    axios
      .get("http://localhost:3310/api/vegetables")
      .then((res) => console.info(res.data))
      .catch((error) => console.error(error));
  };
  const load3 = () => {
    axios
      .get("http://localhost:3310/api/legumes")
      .then((res) => console.info(res.data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <button onClick={() => load()} type="button">
        load
      </button>
      <button onClick={() => load2()} type="button">
        load2
      </button>
      <button onClick={() => load3()} type="button">
        load3
      </button>
      <Counter />
    </div>
  );
}

export default App;
