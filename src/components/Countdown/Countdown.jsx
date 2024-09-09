import React from "react";
import "./Countdown.css";

const Countdown = ({
  timerDays = 10,
  timerHours = 10,
  timerMins = 10,
  timerSecs = 10,
}) => {
  return (
    <p id="countDown">
      {timerDays} Days, {timerHours} Hours, {timerMins} Minutes, {timerSecs} Seconds.
    </p>
  );
};

export default Countdown;
