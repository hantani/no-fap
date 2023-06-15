import React, { useEffect, useState } from "react";
import useInterval from "../useHooks/useInterval";
import Days from "./Days";
import RefreshBtn from "./RefreshBtn";
import {
  store,
  getDays,
  getHours,
  getMinutes,
  getSeconds,
  getRecords,
} from "../modules/Storage";

const TimeTable = ({ days, setDays, records, setRecords }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    getDays().then((days) => {
      setDays(days);
    });
    getHours().then((hours) => {
      setHours(hours);
    });
    getMinutes().then((minutes) => {
      setMinutes(minutes);
    });
    getSeconds().then((seconds) => {
      setSeconds(seconds);
    });
  }, []);

  useInterval(() => {
    setSeconds(seconds + 1);
    store.set("seconds", seconds + 1);
  }, 1000);

  if (seconds === 60) {
    getSeconds().then((seconds) => {
      seconds = 0;
      setSeconds(seconds);
      setMinutes(minutes + 1);
      store.set("seconds", 0);
      store.set("minutes", minutes + 1);
    });
  }

  if (minutes === 60) {
    getMinutes().then((minutes) => {
      minutes = 0;
      setMinutes(minutes);
      setHours(hours + 1);
      store.set("minutes", 0);
      store.set("hours", hours + 1);
    });
  }

  if (hours === 24) {
    getHours().then((hours) => {
      hours = 0;
      setHours(hours);
      setDays(days + 1);
      setRecords([...records, days + 1]);
      store.set("hours", 0);
      store.set("days", days + 1);
    });
    getRecords().then((records) => {
      const parsedList = JSON.parse(records);
      const newList = [...parsedList, days + 1];
      store.set("records", JSON.stringify(newList));
    });
  }

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
