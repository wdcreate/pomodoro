import React from 'react';


function Header({ handleClickTime,setStartTimer}) {

  const handleTimeBtn = (time) => {
    handleClickTime(time)
    setStartTimer(false)
  };
  
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <a href="/" className="logo">
            <img src="./assets/bell.svg" alt="" /> Pomo <span>doro</span>{" "}
          </a>
          <div className="set-time">
            <div className="set-times">
              <div className="time-var time1" onClick={()=>handleTimeBtn(20)}>20 min</div>
              <div className="time-var time2" onClick={()=>handleTimeBtn(40)}>40 min</div>
              <div className="time-var time3" onClick={()=>handleTimeBtn(60)}>60 min</div>
            </div>
            <img src="./assets/clock.svg" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
