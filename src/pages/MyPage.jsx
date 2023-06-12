import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import "./my-page.css";
import MyBadge from "../components/MyBadge";
import MyAchieves from "../components/MyAchieves";
import MyGoal from "../components/MyGoal";
import MyRecord from "../components/MyRecord";

const MyPage = ({ days, achieves, records }) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <h1 className="page-title">마이 페이지</h1>
        <MyBadge />
        <MyAchieves achieves={achieves} days={days} />
        <MyGoal days={days} />
        <MyRecord days={days} records={records} />
      </IonContent>
    </IonPage>
  );
};

export default MyPage;
