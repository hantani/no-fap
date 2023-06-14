import React, { useEffect } from "react";
import { getAchieves } from "../modules/Storage";

const MyAchieves = ({ achieves, days, setAchieves }) => {
  useEffect(() => {
    getAchieves().then((achieves) => {
      const parsedList = JSON.parse(achieves);
      setAchieves(parsedList);
    });
  }, []);

  return (
    <div className="my-achieves">
      <h2 className="list-title">나의 목표</h2>
      <p className="list-subtitle">내가 달성한 목표 수 : {achieves.length}</p>
      <ul>
        {achieves.map((item, index) => {
          return (
            <li key={index}>
              <p>{item}</p>
              <p>{days}일 때 달성!</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MyAchieves;
