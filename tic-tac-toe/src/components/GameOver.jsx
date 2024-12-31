import React from "react";

export default function Gameover({ winner, hasDraw }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It&apos;s Draw</p>}
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
}
