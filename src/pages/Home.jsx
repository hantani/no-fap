import { IonContent, IonPage, useIonAlert, IonIcon } from "@ionic/react";
import { useEffect, useState } from "react";
import Profile from "../components/Profile";
import "./common.css";
import "./Home.css";
import TimeTable from "../components/TimeTable";
import HomeTitle from "../components/HomeTitle";

const Home = ({ days, setDays, records, setRecords }) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <h1 className="page-title">No Fap</h1>
        <HomeTitle days={days} />
        <Profile days={days} />
        <TimeTable
          days={days}
          setDays={setDays}
          records={records}
          setRecords={setRecords}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
