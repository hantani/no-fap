import React, { useCallback, useEffect } from "react";
import { store, getAchieves } from "../modules/Storage";

const MyAchieves = ({ achieves, days, setAchieves }) => {
  useEffect(() => {
    getAchieves().then((achieves) => {
      const parsedList = JSON.parse(achieves);
      setAchieves(parsedList);
    });
  }, []);

  const onDeleteAll = useCallback(() => {
    setAchieves([]);
    store.set("achieves", JSON.stringify([]));
  }, []);

  return (
    <div className="my-achieves">
      <div className="title-container">
        <div className="left-section">
          <h2 className="list-title">나의 목표</h2>
          <p className="list-subtitle">
            내가 달성한 목표 수 : {achieves.length}
          </p>
        </div>
        <div className="right-section">
          {achieves.length > 0 && (
            <button type="button" className="primary-btn" onClick={onDeleteAll}>
              모두 지우기
            </button>
          )}
        </div>
      </div>
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
