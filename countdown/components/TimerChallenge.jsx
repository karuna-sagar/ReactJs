import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timerExpired, setTimerExpired] = useState(false);
  const [timeStarted, setTimeStarted] = useState(false);
  function handleStart() {
    timer.value = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);
    setTimeStarted(true);
  }
  function handleStop() {
    clearTimeout(timer.value);
  }
  return (
    <>
      <ResultModal
        title="You Lost"
        targetTime={targetTime}
        ref={dialog}
      />

      {/* {timerExpired && (
        <ResultModal
          title="You Lost"
          targetTime={targetTime}
        />
      )} */}
      <section className="challenge">
        <h2>{title}</h2>

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
    </>
  );
}
