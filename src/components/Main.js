import React from "react";

function Main({disabledBtn, handleBreak,handlePomo, min, sec, setStartTimer, startTimer}) {
  const handleStart = () => {
    setStartTimer(true);
  };
 
  const handleBreaktime = (breakt) => {
    handleBreak(breakt);
    setStartTimer(false);

  };
  const handlePomotime = (pm) => {
    handlePomo(pm)
    setStartTimer(false);

  };


  return (
    <div className="main">
        <div className={startTimer? "main-inner active":"main-inner"}>
          <div className="main-nav">
            <button className="pomo active" onClick={()=>handlePomotime(10)}>Pomodoro</button>
            <button className="short-break" onClick={()=>handleBreaktime(1)}>Short break</button>
            <button className="long-break" onClick={()=>handleBreaktime(5)}>Long break</button>
          </div>
          <div className="time">
            <div className="time-min">{min<=9 ?  `0${min}` : min}</div>
            <span>:</span>
            <div className="time-sec">{sec<=9 ?  `0${sec}` : sec}</div>
          </div>
          <button
            className="start-btn active-btn"
            type="button"
            disabled={disabledBtn && 'disabled'}
            onClick={() => handleStart()}
          >
            START
          </button>
        </div>
    </div>
  );
}

export default Main;
