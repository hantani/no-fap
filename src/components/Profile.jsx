import React from "react";
import { IonImg } from "@ionic/react";

const Profile = ({ days }) => {
  if (days >= 0) {
    return (
      <div className="profile">
        {/* <IonImg src={require('../assets/img/refresh.png')} /> */}
        <div className="img-container">
          <img src="public/assets/img/profile06.png" alt="test image" />
        </div>
        <p className="title">성스런운 신념</p>
        <p className="sub-title">현재 상태</p>
      </div>
    );
  }
};

export default Profile;
