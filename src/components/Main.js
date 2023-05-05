import React, { useState } from "react";

function Main({ timer, time, handleBreak,handlePomo, min, sec }) {
  const [disabledBtn, setDisabledBtn] = useState(false);
  const handleStart = () => {
    timer(time);
    setDisabledBtn(true);
  };
 
  const handleBreaktime = (breakt) => {
    handleBreak(breakt);
  };
  const handlePomotime = (pm) => {
    handlePomo(pm)
  };

  return (
    <div className="main">
      <div className="container">
        <div className="main-inner">
          <div className="main-nav">
            <button className="pomo active" onClick={()=>handlePomotime(10)}>Pomodoro</button>
            <button className="short-break" onClick={()=>handleBreaktime(1)}>Short break</button>
            <button className="long-break" onClick={()=>handleBreaktime(5)}>Long break</button>
          </div>
          <div className="time">
            <div className="time-min">{min}</div>
            <span>:</span>
            <div className="time-sec">{sec}</div>
          </div>
          <button
            className="start-btn active-btn"
            type="button"
            onClick={() => handleStart()}
          >
            START
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
