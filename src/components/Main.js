import React, { useState } from "react";
import "./styles/Main.scss";
function Main({
  disabledBtn,
  handleBreak,
  handlePomo,
  min,
  sec,
  setStartTimer,
  startTimer,
  setPause,
  pause,
  setMin,time
}) {
  const [activeTime, setActiveTime] = useState("pomo");
  let start = new Audio(require("../audio/start.mp3"));
  let finish = new Audio(require("../audio/finish.mp3"));
  const handleStart = () => {
    if(!startTimer){
      start.play();
      setStartTimer(true);
      setPause(false);
    }
    if(!startTimer && !pause){
      start.play();
      setMin(time)
      setStartTimer(true);
      setPause(false);
    }
  };

  const handleBreaktime = (breakt, event) => {
    setActiveTime(event.target.className);
    handleBreak(breakt);
    setStartTimer(false);
    setPause(false);
  };
  const handlePomotime = (pm, event) => {
    setActiveTime(event.target.className);
    handlePomo(pm);
    setStartTimer(false);
    setPause(false);
  };
  const handlePause = () => {
    setPause(true);
    setStartTimer(false);
    finish.play()
  };

  return (
    <div className="main">
      <div className={startTimer ? "main-inner active" : "main-inner"}>
        <div className="main-nav">
          <button
            className={activeTime === "pomo" ? "pomo active" : "pomo"}
            onClick={(e) => handlePomotime(10, e)}
          >
            Pomodoro
          </button>
          <button
            className={
              activeTime === "short-break"
                ? "short-break active"
                : "short-break"
            }
            onClick={(e) => handleBreaktime(5, e)}
          >
            Short break
          </button>
          <button
            className={
              activeTime === "long-break" ? "long-break active" : "long-break"
            }
            onClick={(e) => handleBreaktime(15, e)}
          >
            Long break
          </button>
        </div>
        <div className="time">
          <div className="time-min">{min <= 9 ? `0${min}` : min}</div>
          <span>:</span>
          <div className="time-sec">{sec <= 9 ? `0${sec}` : sec}</div>
        </div>
        {!startTimer && (
          <button
            className={!startTimer ? "start-btn active-btn" : "start-btn"}
            type="button"
            disabled={disabledBtn && "disabled"}
            onClick={() => handleStart()}
          >
            START
          </button>
        )}
        {startTimer && !pause && (
          <button
            type="button"
            className="start-btn pause"
            onClick={() => handlePause()}
          >
            <img src="./assets/pause.svg" alt="PAUSE" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Main;
