import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  return (
    <dialog
      className="result-modal"
      ref={ref}
    >
      <h2>You {result}</h2>
      <p>
        Your Target time was <strong> {targetTime} seconds, </strong>{" "}
      </p>
      <p>
        You Stopped the timer with <strong>X second left</strong>{" "}
      </p>
      <form className="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});
export default ResultModal;
