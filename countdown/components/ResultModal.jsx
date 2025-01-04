export default function ResultModal({ result, targetTime }) {
  return (
    <dialog
      className="result-modal"
      open
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
}
