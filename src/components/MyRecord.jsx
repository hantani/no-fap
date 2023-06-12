import React, { useState } from "react";
import { useEffect } from "react";

const MyRecord = ({ days, records }) => {
  const [percentage, setPercentage] = useState("0%");

  useEffect(() => {
    const max = Math.max.apply(null, records);
    const width = parseInt((days / max) * 100);
    if (width > 100) {
      setPercentage("100%");
    } else {
      setPercentage(width + "%");
    }
  }, [days, records]);

  return (
    <div className="my-record">
      <h2 className="list-title">나의 최장 기록</h2>
      <p className="list-subtitle">최장 기록과 현재 기록을 비교하세요</p>
      <div className="progress-bar">
        <div style={{ width: percentage }}></div>
      </div>
      <div className="progress-status">
        {days}/{Math.max.apply(null, records)}
      </div>
    </div>
  );
};

export default MyRecord;
