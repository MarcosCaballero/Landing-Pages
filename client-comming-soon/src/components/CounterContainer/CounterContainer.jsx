import React, { useEffect, useState } from "react";
import "./index.css";

const CounterContainer = () => {
  const [horaRestante, setHoraRestante] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  function countDown() {
    const countDate = new Date("feb 5, 2022 12:00:00").getTime();
    let now = new Date().getTime();
    let gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    setHoraRestante({
      day: Math.floor(gap / day),
      hour: Math.floor((gap % day) / hour),
      minute: Math.floor((gap % hour) / minute),
      second: Math.floor((gap % minute) / second),
    });
  }

  useEffect(() => {
    setInterval(() => {
      countDown();
    }, 1000);
  }, []);

  return (
    <div className="count-down">
      <div className="box">
        <h3 id="day">{horaRestante.day === 0 ? "00" : horaRestante.day}</h3>
        <span>day</span>
      </div>
      <div className="box">
        <h3 id="hour">{horaRestante.hour === 0 ? "00" : horaRestante.hour}</h3>
        <span>hour</span>
      </div>
      <div className="box">
        <h3 id="minute">
          {horaRestante.minute === 0 ? "00" : horaRestante.minute}
        </h3>
        <span>minute</span>
      </div>
      <div className="box">
        <h3 id="second">
          {horaRestante.second === 0 ? "00" : horaRestante.second}
        </h3>
        <span>second</span>
      </div>
    </div>
  );
};

export default CounterContainer;
