function Progress({ index, numQuestions, points, answer, maxMarks }) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxMarks}
      </p>
    </header>
  );
}

export default Progress;
