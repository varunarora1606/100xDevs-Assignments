import React, { useRef, useEffect, useState } from "react";
import { formatTime, calculateTime } from "../utils/auxiliaryFunctions";
import "./Timer.module.css"

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [editState, setEditState] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const clock = useRef(null);
  const hourInput = useRef(null);
  const minuteInput = useRef(null);
  const secondInput = useRef(null);

  function toggleTimer() {
    setIsRunning(!isRunning);
  }

  const resetTimer = () => {
    setTime(0);
  };

  useEffect(() => {
    const calculatedTime = calculateTime(
      editState.hours,
      editState.minutes,
      editState.seconds
    );
    setTime(calculatedTime);
    console.log(calculatedTime);
    console.log(isRunning);
    if (isRunning && calculatedTime > 0) {
      console.log(2);
      clock.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(clock.current);
      setIsRunning(false)
    }
  }, [isRunning]);

  useEffect(() => {
    setEditState(formatTime(time));
    if (time <= 0) setIsRunning(false);
  }, [time]);

  const regex = /^([0-9]|[1-9][0-9])$/;
  const onChangeHours = (e) => {
    if (!regex.test(e.target.value)) return
    setEditState({ ...editState, [e.target.name]: e.target.value });
    if (e.target.value.length >= 2) {
      minuteInput.current.focus();
    }
  };
  const onChangeMinutes = (e) => {
    if (!regex.test(e.target.value)) return
    setEditState({ ...editState, [e.target.name]: e.target.value });
    if (e.target.value.length >= 2) {
      secondInput.current.focus();
    }
  };
  const onChangeSeconds = (e) => {
    if (!regex.test(e.target.value)) return
    setEditState({ ...editState, [e.target.name]: e.target.value });
  };

  const onKeyHours = (e) => {
    if(e.key === "Enter") {
      console.log("key")
      minuteInput.current.focus();
      // e.preventDefault()
    }
  }
  const onKeyMinutes = (e) => {
    if(e.key == "Enter") {
      console.log(secondInput.current)
      secondInput.current.focus();
      // e.preventDefault();
    }
  }
  const onKeySeconds = (e) => {
    if(e.key == "Enter") {
      console.log("key3")
      setIsEditing(false)
    }
  }

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', border:"2px solid white", padding:"3ch", borderRadius:"3ch"}}>

      <span
        style={{marginBottom: "2ch"}}
        onClick={() => {
          if (!isRunning) {
            console.log(isRunning + "k");
            // hourInput.current.focus()
            setIsEditing(true);
            console.log(isEditing + "K");
          }
        }}
      >
        {!isEditing ? (
          <>
            <span style={{ width: "2ch", cursor: "pointer", margin: "0.5ch" }}>
              {editState.hours}
            </span>
            :
            <span style={{ width: "2ch", cursor: "pointer", margin: "0.5ch" }}>
              {editState.minutes}
            </span>
            :
            <span style={{ width: "2ch", cursor: "pointer", margin: "0.5ch" }}>
              {editState.seconds}
            </span>
          </>
        ) : (
          <>
            <input
              maxLength={2}
              style={{ width: "2ch", cursor: "pointer", margin: "0.5ch" }}
              name={"hours"}
              value={editState.hours}
              ref={hourInput}
              onChange={onChangeHours}
              onKeyDown={onKeyHours}
              autoFocus
            />
            :
            <input
              maxLength={2}
              style={{ width: "2ch", cursor: "pointer", margin: "0.5ch" }}
              name={"minutes"}
              value={editState.minutes}
              ref={minuteInput}
              onChange={onChangeMinutes}
              onKeyDown={onKeyMinutes}
            />
            :
            <input
              maxLength={2}
              style={{ width: "2ch", cursor: "pointer", margin: "0.5ch" }}
              name={"seconds"}
              value={editState.seconds}
              ref={secondInput}
              onChange={onChangeSeconds}
              onKeyDown={onKeySeconds}
            />
          </>
        )}
      </span>
      <div>
        {<button style={{margin: "0.5ch"}} onClick={toggleTimer}>{isRunning ? "Stop" : "Start"}</button>}

        <button style={{margin: "0.5ch"}} onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
