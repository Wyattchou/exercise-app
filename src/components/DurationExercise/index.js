import React, { useState, useEffect } from "react";

function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else if (!isRunning && interval) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    const paddedMins = mins < 10 ? "0" + mins : mins;
    const paddedSecs = secs < 10 ? "0" + secs : secs;

    return `${paddedMins}:${paddedSecs}`;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{name}</h1>

      <h2>{formatTime()}</h2>

      <button onClick={() => setIsRunning(true)}>
        Start
      </button>

      <button onClick={() => setIsRunning(false)} style={{ marginLeft: "10px" }}>
        Stop
      </button>

      <button
        onClick={() => {
          setIsRunning(false);
          setSeconds(0);
        }}
        style={{ marginLeft: "10px" }}
      >
        Reset
      </button>
    </div>
  );
}

export default DurationExercise;