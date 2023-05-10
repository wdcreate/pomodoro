import React from 'react';
import './styles/Header.scss'

function Header({ handleClickTime,setStartTimer,setPause}) {

  const handleTimeBtn = (time) => {
    handleClickTime(time)
    setStartTimer(false)
    setPause(false)
  };
  
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="logo">
            <img src="./assets/bell.svg" alt="" /> Pomo <span>doro</span>{" "}
          </div>
          <div className="set-time">
            <div className="set-times">
              <div className="time-var time1" onClick={()=>handleTimeBtn(20)}>20m</div>
              <div className="time-var time2" onClick={()=>handleTimeBtn(40)}>40m</div>
              <div className="time-var time3" onClick={()=>handleTimeBtn(60)}>60m</div>
            </div>
            <img src="./assets/clock.svg" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
