import axios from "axios";
import "./App.css";

function App() {
  const getLegumes = () => {
    axios
      .get("http://localhost:3310/api/vegetables")
      .then((res) => res.data)
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <h1>Mes bios légumes</h1>
      <button type="button" onClick={getLegumes}>
        Affiche les légumes
      </button>
    </div>
  );
}

export default App;
