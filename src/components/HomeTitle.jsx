import React from "react";

const HomeTitle = ({ days }) => {
  if (days >= 0) {
    return (
      <h1 className="page-title">
        단호한 마음의 굳은 결심을 막거나 통제할 수 있는 우연, 운명, 숙명이란
        없다.
      </h1>
    );
  }
};

export default HomeTitle;
