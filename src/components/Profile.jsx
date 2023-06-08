import React from "react";

const Profile = ({ days }) => {
  if (days >= 0) {
    return (
      <div className="profile">
        <img
          src="https://dummyimage.com/400x400/000/fff.jpg"
          alt="test image"
        />
        <p className="title">도전자</p>
        <p className="sub-title">현재 상태</p>
      </div>
    );
  }
};

export default Profile;
