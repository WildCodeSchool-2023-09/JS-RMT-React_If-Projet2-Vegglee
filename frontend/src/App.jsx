import { useLoaderData } from "react-router-dom";
import "./App.css";

function App() {
  const legumes = useLoaderData();

  return (
    <div className="App">
      <h1>Mes bios légumes</h1>
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
