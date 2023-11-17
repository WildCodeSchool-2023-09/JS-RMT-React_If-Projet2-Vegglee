import { useLoaderData, Link } from "react-router-dom";
import LegumeCard from "../components/LegumeCard";

function HomePage() {
  const legumes = useLoaderData();
  return (
    <div>
      <h1>Mes bios légumes</h1>
      <div className="ctnCard">
        {legumes.map((legume) => {
          return (
            <Link to={`/vegetables/${legume.id}`} key={legume.id}>
              <LegumeCard legume={legume} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
