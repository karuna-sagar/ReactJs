import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  const dialog = useRef();
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
