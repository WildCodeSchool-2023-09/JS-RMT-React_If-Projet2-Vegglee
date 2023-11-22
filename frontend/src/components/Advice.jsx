import React from "react";
import adviceData from "./adviceData.json";
import "./advice.css";
import advice1 from "../assets/advice1.jpg";
import advice2 from "../assets/advice2.jpg";
import advice3 from "../assets/advice3.jpg";
import advice4 from "../assets/advice4.jpg";

function Advice() {
  const getImage = (id) => {
    const image = {
      1: advice1,
      2: advice2,
      3: advice3,
      4: advice4,
    };

    return image[id];
  };
  return (
    <div className="adviceCtn">
      {adviceData.map((advice) => (
        <div key={advice.id} className="adviceItem">
          <div>
            <img
              className="adviceImg"
              src={getImage(advice.id)}
              alt="advises"
            />
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
