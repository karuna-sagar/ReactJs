import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  function handleName() {
    setEnteredPlayerName(playerName.current.value);
  }
  return (
    <section id="player">
      <h2> {enteredPlayerName ?? "Welcome unknown entity"}</h2>
      <p>
        <input
          type="text"
          ref={playerName}
        />
        <button onClick={handleName}>Set Name</button>
      </p>
    </section>
  );
}
