import React from "react";
import "./App.css";
import image1 from "./img/Create-bro.png";
import CounterContainer from "./components/CounterContainer/CounterContainer";

function App() {
  return (
    <div className="container">
      <div className="content">
        <h3 className="title">we are comming soon</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
          possimus sequi ab libero consectetur dicta ipsam placeat? Deleniti,
          pariatur magnam, impedit repudiandae maiores rerum dolores ad natus
          aliquam, tempore quo!
        </p>
        <CounterContainer />
        <a href="#" className="btn">
          notify me
        </a>
      </div>
      <div className="image">
        <img src={image1} alt="Imagen1" />
      </div>
    </div>
  );
}

export default App;
