

function Audio() {
  return ( 
    <div className="audio">
      <audio className="start-audio">
      <source src="img/start.mp3" type="audio/mpeg"/>
    </audio>
    <audio className="stop-audio">
      <source src="img/stop.mp3" type="audio/mpeg"/>
    </audio>
    </div>
   );
}

export default Audio;