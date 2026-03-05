import React, { useState } from "react";

function RepetitionExercise({ name, goBack }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{name}</h1>

      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Add Rep
      </button>

      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
        Reset
      </button>

      <br /><br />

      <button onClick={goBack}>
        Back
      </button>

    </div>
  );
}

export default RepetitionExercise;