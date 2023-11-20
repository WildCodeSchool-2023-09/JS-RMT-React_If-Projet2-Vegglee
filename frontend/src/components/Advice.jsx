import React from "react";
import adviceData from "./adviceData.json";
import "./advice.css";

function Advice() {
  return (
    <div className="adviceCtn">
      {adviceData.map((advice) => (
        <div key={advice.id} className="adviceItem">
          <div>
            <img className="adviceImg" src={advice.image} alt="advises" />
          </div>
          <div className="adviceCons">
            <h3>{advice.title}</h3>
            <h4>{advice.text}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Advice;
