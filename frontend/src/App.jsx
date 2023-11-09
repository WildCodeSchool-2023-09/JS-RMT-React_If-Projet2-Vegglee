import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/nos-paniers">Nos Paniers</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
export default App;
