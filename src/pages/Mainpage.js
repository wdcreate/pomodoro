import React, { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Audio from "../components/Audio";

function Mainpage() {
  const [time, setTime] = useState(10);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(10);
  let timerInt;

  function timer(time) {
    timerInt = setInterval(timerF, 1000);

    function timerF() {
      if (sec === 0) {
        setSec(59);
        setMin(min-1);
      } else {
        setSec(sec-1);
      }
      if (sec <= 0 && min <= 0) {
        clearInterval(timerInt);
        setSec(0);
        setMin(0);
      }
    }
  }
  console.log(sec)
  console.log(min)
  const handleClickTime = (pomotime) => {
    clearInterval(timerInt);
    setTime(pomotime);
    setMin(pomotime);
    console.log("handleClickTime");
  };
  const handleBreak = (breaktime) => {
    clearInterval(timerInt);
    setMin(breaktime);
    timer(breaktime);
    console.log("handlebreak");
  };
  const handlePomo = (pomo) => {
    setMin(pomo);
    clearInterval(timerInt);
    console.log("handlepomo");
  };

  return (
    <div className="mainpage">
      <Header time={time} handleClickTime={handleClickTime} />
      <Main
        timer={timer}
        time={time}
        handleBreak={handleBreak}
        handlePomo={handlePomo}
        min={min}
        sec={sec}
      />
      <Audio />
    </div>
  );
}

export default Mainpage;
