import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { name: "Push Ups", type: "repetition" },
    { name: "Running", type: "duration" },
    { name: "Plank", type: "duration" }
  ];

  if (selectedExercise) {
    if (selectedExercise.type === "repetition") {
      return (
        <RepetitionExercise name={selectedExercise.name} />
      );
    } else if (selectedExercise.type === "duration") {
      return (
        <DurationExercise name={selectedExercise.name} />
      );
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Exercise Tracker</h1>

      {exercises.map((exercise, index) => (
        <button
          key={index}
          onClick={() => setSelectedExercise(exercise)}
          style={{ margin: "10px", padding: "10px 20px" }}
        >
          {exercise.name} ({exercise.type})
        </button>
      ))}
    </div>
  );
}

export default App;