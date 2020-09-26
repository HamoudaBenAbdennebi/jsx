import React from "react";
import rtx from "./img1.jpg";
import gtx from "./img2.jpg";
import BO3 from "./bo3.mp4";
import "./style.css";
function App() {
  return (
    <>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src={rtx} alt="IMG 1" />
        <br />
        <img src={gtx} alt="IMG 2" />
      </div>
      <video style={{ width: "320px", height: "240px" }} controls>
        <source src={BO3} type="video/mp4" />
      </video>
    </>
  );
}

export default App;
