import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [legumes, setLegumes] = useState([]);
  const getLegumes = () => {
    axios
      .get("http://localhost:3310/api/vegetables")
      .then((res) => setLegumes(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <h1>Mes bios légumes</h1>
      <button type="button" onClick={getLegumes}>
        Affiche les légumes
      </button>
      {legumes.map((legume) => {
        return (
          <div>
            <img src={legume.image} alt={legume.name} />
            <h2>{legume.name}</h2>
            <p>
              {`prix: `}
              {legume.price}
              {` Euros`}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
