import React from "react";
import Days from "./Days";

const TimeTable = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="time-table">
      <Days days={days} />
      <div className="time-sets">
        <ul>
          <li className="hours">
            {hours < 10 ? <p>{"0" + hours}</p> : <p>{hours}</p>}
            <p>시간</p>
          </li>
          <li className="minutes">
            {minutes < 10 ? <p>{"0" + minutes}</p> : <p>{minutes}</p>}
            <p>분</p>
          </li>
          <li className="seconds">
            {seconds < 10 ? <p>{"0" + seconds}</p> : <p>{seconds}</p>}
            <p>초</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TimeTable;
