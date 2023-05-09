import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Audio from "../components/Audio";

export default function Mainpage() {
  const [time, setTime] = useState(10);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(10);
  const [startTimer, setStartTimer] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(false);

  useEffect(() => {
    if (startTimer) {
      timer();
      setDisabledBtn(true);
    }
    if (!startTimer) {
      setSec(0);
      setDisabledBtn(false);
    }
    return () => {
      clearTimeout(timerInt);
    };
  }, [min, sec, startTimer]);

  let timerInt;

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
    timer(breaktime);
  };
  const handlePomo = (pomo) => {
    setMin(pomo);
    clearInterval(timerInt);
  };

  return (
    <div className="mainpage">
      <Header min={min} handleClickTime={handleClickTime}         setStartTimer={setStartTimer}
/>
      <Main
        disabledBtn={disabledBtn}
        setStartTimer={setStartTimer}
        startTimer={startTimer}
        setMin={setMin}
        setTime={setTime}
        timer={timer}
        handleBreak={handleBreak}
        handlePomo={handlePomo}
        min={min}
        sec={sec}
      />
      <Audio />
    </div>
  );
}
