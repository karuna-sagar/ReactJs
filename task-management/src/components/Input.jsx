import React from "react";

export default function Input({ isTextArea, label, ...props }) {
  return (
    <p>
      <label>{props}</label>
      {isTextArea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}
