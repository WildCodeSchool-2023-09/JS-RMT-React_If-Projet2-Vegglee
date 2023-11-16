import { useLoaderData } from "react-router-dom";
import LegumeCard from "./components/LegumeCard";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <div>

      <h1>Mes bios légumes</h1>
      <div className="ctnCard">
        {legumes.map((legume) => {
          return <LegumeCard key={legume.id} legume={legume} />;
        })}
      </div>

      <HomePage />

    </div>
  );
}
export default App;
