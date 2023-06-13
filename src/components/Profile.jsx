import React from "react";
import { IonImg } from "@ionic/react";

const Profile = ({ days }) => {
  if (days >= 0 && days <= 3) {
    return (
      <div className="profile">
        <div className="img-container">
          <img src="public/assets/img/profile01.png" alt="test image" />
        </div>
        <p className="title">성스런운 신념</p>
        <p className="sub-title">현재 상태</p>
      </div>
    );
  } else if (days >= 4 && days <= 7) {
    return (
      <div className="profile">
        <div className="img-container">
          <img src="public/assets/img/profile02.png" alt="test image" />
        </div>
        <p className="title">악마의 시련</p>
        <p className="sub-title">현재 상태</p>
      </div>
    );
  } else if (days >= 8 && days <= 14) {
    return (
      <div className="profile">
        <div className="img-container">
          <img src="public/assets/img/profile03.png" alt="test image" />
        </div>
        <p className="title">죽음의 골짜기</p>
        <p className="sub-title">현재 상태</p>
      </div>
    );
  } else if (days >= 15 && days <= 30) {
    return (
      <div className="profile">
        <div className="img-container">
          <img src="public/assets/img/profile04.png" alt="test image" />
        </div>
        <p className="title">악마의 자위꾼</p>
        <p className="sub-title">현재 상태</p>
      </div>
    );
  } else if (days >= 31 && days <= 60) {
    return (
      <div className="profile">
        <div className="img-container">
          <img src="public/assets/img/profile05.png" alt="test image" />
        </div>
        <p className="title">내 손을 묶어라</p>
        <p className="sub-title">현재 상태</p>
      </div>
    );
  } else if (days >= 61 && days <= 100) {
    return (
      <div className="profile">
        <div className="img-container">
          <img src="public/assets/img/profile06.png" alt="test image" />
        </div>
        <p className="title">피터슨의 오른손</p>
        <p className="sub-title">현재 상태</p>
      </div>
    );
  } else if (days >= 101 && days <= 365) {
    return (
      <div className="profile">
        <div className="img-container">
          <img src="public/assets/img/profile07.png" alt="test image" />
        </div>
        <p className="title">황혼의 군주</p>
        <p className="sub-title">현재 상태</p>
      </div>
    );
  } else if (days > 365) {
    return (
      <div className="profile">
        <div className="img-container">
          <img src="public/assets/img/profile08.png" alt="test image" />
        </div>
        <p className="title">대현자</p>
        <p className="sub-title">현재 상태</p>
      </div>
    );
  }
};

export default Profile;
