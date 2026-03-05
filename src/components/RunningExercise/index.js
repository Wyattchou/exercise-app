import React, { useState, useEffect } from "react";

function RunningExercise({ name, goBack}) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running]);

  const startStop = () => {
    setRunning(!running);
  };

  const recordLap = () => {
    setLaps([...laps, time]);
  };

  const reset = () => {
    setRunning(false);
    setTime(0);
    setLaps([]);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{name}</h2>

      <h1>{formatTime(time)}</h1>

      <button onClick={startStop}>
        {running ? "Stop" : "Start"}
      </button>

      <button onClick={recordLap} disabled={!running}>
        Lap
      </button>

      <button onClick={reset}>
        Reset
      </button>

      <h3>Laps</h3>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
            Lap {index + 1}: {formatTime(lap)}
          </li>
        ))}
      </ul>

        <button onClick={goBack} style={{ marginTop: "20px" }}>
        Back
      </button>

    </div>
  );
}

export default RunningExercise;