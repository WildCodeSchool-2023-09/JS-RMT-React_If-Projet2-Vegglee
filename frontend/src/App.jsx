import { useLoaderData } from "react-router-dom";
import "./App.css";

function App() {
  const legumes = useLoaderData();

  return (
    <div>
      <h1>Mes bios légumes</h1>
      {legumes.map((legume) => {
        return (
          <div className="cardCtn">
            <div className="legumesCard">
              <img src={legume.image} alt={legume.name} />
              <h2 className="titleOnImage">{legume.name}</h2>
              <p>
                prix:
                {legume.price}0 €
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default App;
