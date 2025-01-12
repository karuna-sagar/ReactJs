import React from "react";
import NewTask from "./NewTask";

export default function Tasks({ onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      <p className="text-stone-800 my-4">
        This project does not have tasks yet
      </p>
      <ul></ul>
    </section>
  );
}
