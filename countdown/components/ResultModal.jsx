import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, onReset, remainingTime },
  ref
) {
  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const formattedTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog
      className="result-modal"
      ref={dialog}
    >
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score : {score}</h2>}
      <p>
        Your Target time was <strong> {targetTime} seconds, </strong>{" "}
      </p>
      <p>
        You Stopped the timer with <strong>{formattedTime} second left</strong>{" "}
      </p>
      <form
        className="dialog"
        onSubmit={onReset}
      >
        <button>Close</button>
      </form>
    </dialog>
  );
});
export default ResultModal;
