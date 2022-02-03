import React, { useEffect, useState } from "react";
import imagen1 from "../../assets/Images/salad.jpg";
import imagen2 from "../../assets/Images/salad-2.jpg";
import imagen3 from "../../assets/Images/fruits.jpg";
import imagen4 from "../../assets/Images/toast.jpg";
import imagen5 from "../../assets/Images/burger.jpg";
import "./index.css";

const ImagesRandom = () => {
  const images = [imagen1, imagen2, imagen3, imagen4, imagen5];
  const [imageSelec, setImageSelec] = useState(`${imagen1}`);

  useEffect(() => {
    const randomImage = () => {
      const image = images[Math.floor(Math.random() * images.length)];
      return image;
    };

    setInterval(() => {
      setImageSelec(randomImage());
    }, 2500);
  }, []);

  const [cursor, setCursor] = useState({
    x: -15,
    y: -15,
  });

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setCursor({ x: e.pageX, y: e.pageY });
    });
  }, []);
  return (
    <>
      <div className="image" style={{ background: `url(${imageSelec})` }}>
        <img src="" alt="" />
      </div>
      <div className="cursor" style={{ top: cursor.y, left: cursor.x }}></div>
    </>
  );
};

export default ImagesRandom;
