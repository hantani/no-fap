import React from "react";

const MyBadge = () => {
  return (
    <div className="my-badge-container">
      <h2 className="list-title">나의 뱃지</h2>
      <p className="list-subtitle">내가 달성한 뱃지 수 : 1/7</p>
      <ul className="my-badge">
        <li>
          <div className="img-container">
            <img
              src="https://dummyimage.com/400x400/000/fff.jpg"
              alt="test image"
            />
          </div>
          <div className="text-container">
            <p>성스러운 신념</p>
            <p>0~3일</p>
          </div>
        </li>
        <li>
          <div className="img-container">
            <img
              src="https://dummyimage.com/400x400/000/fff.jpg"
              alt="test image"
            />
          </div>
          <div className="text-container">
            <p>악마의 시련</p>
            <p>4일~7일</p>
          </div>
        </li>
        <li>
          <div className="img-container">
            <img
              src="https://dummyimage.com/400x400/000/fff.jpg"
              alt="test image"
            />
          </div>
          <div className="text-container">
            <p>죽음의 골짜기</p>
            <p>8일~14일</p>
          </div>
        </li>
        <li>
          <div className="img-container">
            <img
              src="https://dummyimage.com/400x400/000/fff.jpg"
              alt="test image"
            />
          </div>
          <div className="text-container">
            <p>악마의 자위꾼</p>
            <p>15일~30일</p>
          </div>
        </li>
        <li>
          <div className="img-container">
            <img
              src="https://dummyimage.com/400x400/000/fff.jpg"
              alt="test image"
            />
          </div>
          <div className="text-container">
            <p>내 손을 묶어라</p>
            <p>31일~60일</p>
          </div>
        </li>
        <li>
          <div className="img-container">
            <img
              src="https://dummyimage.com/400x400/000/fff.jpg"
              alt="test image"
            />
          </div>
          <div className="text-container">
            <p>차라리 없었으면</p>
            <p>61일~100일</p>
          </div>
        </li>
        <li>
          <div className="img-container">
            <img
              src="https://dummyimage.com/400x400/000/fff.jpg"
              alt="test image"
            />
          </div>
          <div className="text-container">
            <p>황혼의 군주</p>
            <p>101일~365일</p>
          </div>
        </li>
        <li>
          <div className="img-container">
            <img
              src="https://dummyimage.com/400x400/000/fff.jpg"
              alt="test image"
            />
          </div>
          <div className="text-container">
            <p>대현자의 넋두리</p>
            <p>365일+</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MyBadge;
