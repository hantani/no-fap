import React, { useState } from "react";
import useDidMountEffect from "../useHooks/useDidMountEffect";
import useInterval from "../useHooks/useInterval";
import Days from "./Days";
import RefreshBtn from "./RefreshBtn";

const TimeTable = ({ days, setDays, records, setRecords }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useInterval(() => {
    setSeconds(seconds + 1);
  }, 1000);

  useDidMountEffect(() => {
    setSeconds(0);
    setMinutes(minutes + 1);
  }, [seconds === 60]);

  useDidMountEffect(() => {
    setMinutes(0);
    setHours(hours + 1);
  }, [minutes === 60]);

  useDidMountEffect(() => {
    setHours(0);
    setDays(days + 1);
    setRecords([...records, days + 1]);
    console.log("working");
  }, [hours === 24]);

  return (
    <>
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
      <RefreshBtn
        setDays={setDays}
        setHours={setHours}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
      />
    </>
  );
};

export default TimeTable;
