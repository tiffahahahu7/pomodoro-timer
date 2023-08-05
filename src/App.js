import Wrapper from "./Wrapper";
import Setting from "./Setting";
import Timer from "./Timer";
import audio from "./assets/Alarm_clock.mp3";
import { useState, useEffect } from "react";

const App = () => {
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [timerLabel, setTimerLabel] = useState("Session")
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [playAudio, setplayAudio] = useState(false)
  const audioElement = document.getElementById('beep')

  const handleDecrementClick = (type) => {
    if(!isRunning){
      if(type === "break" && breakLength > 1){
        setBreakLength (breakLength - 1)
      } else if (type === "session" && sessionLength > 1) {
        setSessionLength(sessionLength - 1)
      } 
    }
  }

  const handleIncrementClick = (type) => {
    if(!isRunning){
      if(type === "break" && breakLength < 60){
        setBreakLength (breakLength + 1)
      } else if (type === "session" && sessionLength < 60) {
        setSessionLength(sessionLength + 1)
      } 
    }
  }

  useEffect(()=> {
    if (timerLabel === "Session"){
      setMinutes(sessionLength)
      setSeconds(0)
    } else if (timerLabel === "Break"){
      setMinutes(breakLength)
      setSeconds(0)
    }
  },[sessionLength, breakLength])

 
  useEffect(() => {
    if (isRunning) {
      let totalSeconds = minutes * 60 + seconds
      let interval = setInterval(() => {
        if (totalSeconds > 0) {
          setplayAudio(false)
          totalSeconds--
          setMinutes(Math.floor(totalSeconds / 60))
          setSeconds(totalSeconds % 60)
        } else {
          setplayAudio(true)
          if (timerLabel === "Session"){
            setTimerLabel("Break")
            setMinutes(breakLength)
            setSeconds(0)
          } else if (timerLabel === "Break"){
            setTimerLabel("Session")
            setMinutes(sessionLength)
            setSeconds(0)
          }
        }
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isRunning,timerLabel])

  useEffect(() => {
    if (playAudio) {
      audioElement.play()
    }
  }, [playAudio])

  const handleStartStop = () => {
    setIsRunning(!isRunning)
    setMinutes(minutes)
    setSeconds(seconds)
  };

  const handleReset = () => {
    audioElement.pause()
    audioElement.currentTime = 0
    setIsRunning(false)
    setplayAudio(false)
    setTimerLabel("Session")
    setBreakLength(5)
    setSessionLength(25)
    setMinutes(25)
    setSeconds(0)
  }

  return (
    <div className="App">
      <Wrapper>
        <h1>Pomodoro Timer</h1>
        <Setting breakLength={breakLength} sessionLength={sessionLength} 
        onDecrementClick={handleDecrementClick} onIncrementClick={handleIncrementClick}></Setting>
        <Timer 
        timerLabel = {timerLabel}
        isRunning = {isRunning}
        timeLeft={`${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`} 
        onStartStopClick={handleStartStop} 
        onResetClick={handleReset}>
        </Timer>
        <audio id="beep" src={audio}></audio>
      </Wrapper>
    </div>
  );
}

export default App;
