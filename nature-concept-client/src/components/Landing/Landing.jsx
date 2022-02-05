import React from "react";
import image1 from "./assets/images/3435850.jpg";

import "./index.css";

const Landing = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>nature</h1>
        <h3>landing page</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          vitae aperiam soluta nobis nulla facere saepe magnam dicta, quisquam
          autem at incidunt distinctio hic qui, aliquam natus nam molestias
          corrupti.
        </p>
        <a href="#">
          <button>read more</button>
        </a>
      </div>
      <div className="image">
        <img src={image1} alt="nature image" />
      </div>
    </div>
  );
};

export default Landing;
