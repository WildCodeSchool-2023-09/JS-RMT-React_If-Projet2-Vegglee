import "./FormulairePage.css";
import NavBar from "../components/NavBar";

function Formulaire() {
  return (
    <div>
      <NavBar />
      <div className="FormulaireContainer">
        <div>
          <h4 className="FormulaireH4">Nous Rejoindre ! </h4>
        </div>
        <form className="FormulaireForm">
          <label className="FormulaireLabel">
            <div>Email</div>
            <input className="FormulaireInput" type="email" name="email" />
          </label>

          <label className="FormulaireLabel">
            <div>Nom Prénom</div>
            <input
              className="FormulaireInput"
              type="text"
              id="name"
              name="firstname"
            />
          </label>

          <label className="FormulaireLabel">
            <div>Adresse</div>
            <input
              className="FormulaireInput"
              type="text"
              id="address"
              name="address"
            />
          </label>

          <label className="FormulaireLabel">
            <div>Téléphone</div>
            <input
              className="FormulaireInput"
              id="telNo"
              name="telNo"
              type="tel"
              size="20"
              maxLength="10"
            />
          </label>

          <div className="contactBtn">
            <button className="FormulaireButton" type="submit">
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulaire;
