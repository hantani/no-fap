import React, { memo } from "react";

const Days = ({ days }) => {
  return (
    <div className="days">
      <p className="sub-title">당신의 여정을 응원합니다</p>
      <p className="title">
        <span>{days}</span>일차
      </p>
    </div>
  );
};

export default memo(Days);
