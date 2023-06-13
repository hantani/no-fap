import React, { useEffect, useRef, useState } from "react";

const MyGoal = ({ days }) => {
  const [goal, setGoal] = useState();
  const [value, setValue] = useState("");
  const [percentage, setPercentage] = useState("");

  useEffect(() => {
    let width = parseInt((days / goal) * 100);
    if (width > 100) {
      setPercentage("100%");
    } else {
      setPercentage(width + "%");
    }
  }, [days, goal]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    if (!isNaN(value)) {
      setGoal(value);
      setValue("");
    }
  };

  const onReset = () => {
    setGoal();
  };

  return (
    <div className="my-goal">
      {goal ? (
        <>
          <div className="title-container">
            <div className="left-section">
              <h2 className="list-title">나의 목표 일 수</h2>
              <p className="list-subtitle">목표을 향해 달려가세요!</p>
            </div>
            <div className="right-section">
              <button type="button" className="primary-btn" onClick={onReset}>
                재설정
              </button>
            </div>
          </div>
          <div className="progress-bar">
            <div style={{ width: percentage }}></div>
          </div>
          <p className="progress-status">
            {days ? days : "0"}/{goal}
          </p>
        </>
      ) : (
        <>
          <h2 className="list-title">나의 목표 일 수</h2>
          <p className="list-subtitle">목표 일 수를 설정해주세요</p>
          <form className="goal-form" onSubmit={onClick}>
            <input
              type="number"
              placeholder="숫자를 입력해주세요"
              value={value}
              onChange={onChange}
            />
            <button type="button" className="primary-btn" onClick={onClick}>
              입력
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default MyGoal;
