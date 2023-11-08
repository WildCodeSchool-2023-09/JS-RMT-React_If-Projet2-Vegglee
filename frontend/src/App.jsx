import { useLoaderData } from "react-router-dom";
import LegumeCard from "./components/LegumeCard";
import "./App.css";

function App() {
  const legumes = useLoaderData();

  return (
    <div>
      <h1>Mes bios légumes</h1>
      <div className="ctnCard">
        {legumes.map((legume) => {
          return <LegumeCard key={legume.id} legume={legume} />;
        })}
      </div>
    </div>
  );
}
export default App;
