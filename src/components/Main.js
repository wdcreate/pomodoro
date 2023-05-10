import React,{useState} from "react";
import './styles/Main.scss'
function Main({disabledBtn, handleBreak,handlePomo, min, sec, setStartTimer, startTimer}) {
  const[activeTime, setActiveTime]=useState('pomo')
  const handleStart = () => {
    setStartTimer(true);
  };
 
  const handleBreaktime = (breakt, event) => {
    setActiveTime(event.target.className)
    handleBreak(breakt);
    setStartTimer(false);

  };
  const handlePomotime = (pm,event) => {
    setActiveTime(event.target.className)
    handlePomo(pm)
    setStartTimer(false);

  };


  return (
    <div className="main">
        <div className={startTimer? "main-inner active":"main-inner"}>
          <div className="main-nav">
            <button className={activeTime==='pomo'?'pomo active': 'pomo'} onClick={(e)=>handlePomotime(10, e)}>Pomodoro</button>
            <button className={activeTime==='short-break'?'short-break active': 'short-break'}  onClick={(e)=>handleBreaktime(5,e)}>Short break</button>
            <button className={activeTime==='long-break'?'long-break active': 'long-break'} onClick={(e)=>handleBreaktime(15,e)}>Long break</button>
          </div>
          <div className="time">
            <div className="time-min">{min<=9 ?  `0${min}` : min}</div>
            <span>:</span>
            <div className="time-sec">{sec<=9 ?  `0${sec}` : sec}</div>
          </div>
          <button
            className={!startTimer ? 'start-btn active-btn': 'start-btn'}
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
