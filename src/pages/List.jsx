import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import "./common.css";
import "./list.css";
import ListForm from "../components/ListForm";

const List = ({ achieves, setAcheives }) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <h1 className="page-title">Goal List</h1>
        <p className="sub-title">여정을 하면서 달성할 목표를 적어주세요</p>
        <ListForm achieves={achieves} setAcheives={setAcheives} />
      </IonContent>
    </IonPage>
  );
};

export default List;
