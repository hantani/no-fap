import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import "./my-page.css";
import MyBadge from "../components/MyBadge";
import MyAchieves from "../components/MyAchieves";
import MyGoal from "../components/MyGoal";
import MyRecord from "../components/MyRecord";

const MyPage = ({ days, achieves, records, setAchieves }) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <h1 className="page-title">My Page</h1>
        <MyBadge records={records} />
        <MyAchieves achieves={achieves} days={days} setAchieves={setAchieves} />
        <MyGoal days={days} />
        <MyRecord days={days} records={records} />
      </IonContent>
    </IonPage>
  );
};

export default MyPage;
