import { useRef, useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const [timerExpired, setTimerExpired] = useState(false);
  const [timeStarted, setTimeStarted] = useState(false);
  function handleStart() {
    timer.value = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimeStarted(true);
  }
  function handleStop() {
    clearTimeout(timer.value);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lost</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timeStarted ? handleStop : handleStart}>
          {timeStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timeStarted ? "active" : undefined}>
        {timerExpired ? "Time is running..." : "Time is inactive"}
      </p>
    </section>
  );
}
