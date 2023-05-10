import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import './styles/Mainpage.scss'

export default function Mainpage() {
  const [time, setTime] = useState(10);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(10);
  const [startTimer, setStartTimer] = useState(false);
  const [pause, setPause] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(false);

  useEffect(() => {
    if (startTimer) {
      timer();
      setDisabledBtn(true);
    }
    if (!startTimer && pause) {
      setDisabledBtn(false);
    }
    if (!startTimer && !pause) {
      setSec(0);
      setDisabledBtn(false);
    }
    return () => {
      clearTimeout(timerInt);
    };
  }, [min, sec, startTimer]);

  let timerInt;
  let finish = new Audio(require("../audio/finish.mp3"));

  const timer = () => {
    const timerF = () => {
      if (!sec) {
        setSec(60);
        setMin(min - 1);
      }
      if (sec <= 0 && min <= 0) {
        clearTimeout(timerInt);
        setSec(0);
        setMin(0);
        setStartTimer(false);
        setDisabledBtn(true);
        finish.play()
      }
      if (startTimer) {
        setSec((prev) => prev - 1);
      }
    };
    timerInt = setTimeout(timerF, 1000);
  };
  const handleClickTime = (pomotime) => {
    clearInterval(timerInt);
    setMin(pomotime);
    setTime(pomotime);
  };
  const handleBreak = (breaktime) => {
    clearInterval(timerInt);
    setMin(breaktime);
    setTime(breaktime);
    timer(breaktime);
  };
  const handlePomo = (pomo) => {
    setMin(pomo);
    setTime(pomo)
    clearInterval(timerInt);
  };

  return (
    <div className={startTimer? "mainpage active":"mainpage"}>
      <div className="container">
        <Header
          min={min}
          handleClickTime={handleClickTime}
          setStartTimer={setStartTimer}
          setPause={setPause}
        />
        <Main
          disabledBtn={disabledBtn}
          setStartTimer={setStartTimer}
          startTimer={startTimer}
          setMin={setMin}
          timer={timer}
          time={time}
          handleBreak={handleBreak}
          handlePomo={handlePomo}
          min={min}
          sec={sec}
          setPause={setPause}
          pause={pause}
        />
      </div>
    </div>
  );
}
