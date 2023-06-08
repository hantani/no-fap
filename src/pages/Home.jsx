import { IonContent, IonPage } from "@ionic/react";
import { useEffect, useState } from "react";
import Profile from "../components/Profile";
import "./common.css";
import "./Home.css";
import TimeTable from "../components/TimeTable";

const Home = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // useEffect(() => {
  //   const tick = setInterval(() => {
  //     setSeconds((prevSeconds) => prevSeconds + 1);
  //   }, 1000);
  //   if (seconds === 60) {
  //     setSeconds(0);
  //     setMinutes((prevMinutes) => prevMinutes + 1);
  //   }
  //   if (minutes === 60) {
  //     setMinutes(0);
  //     setHours((prevHours) => prevHours + 1);
  //   }
  //   if (hours === 24) {
  //     setHours(0);
  //     setDays((prevDays) => prevDays + 1);
  //   }
  //   return () => {
  //     clearInterval(tick);
  //   };
  // }, [seconds === 60, minutes === 60, hours === 24]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <h1 className="page-title">No Fap Yes Gain</h1>
        <Profile days={days} />
        <TimeTable
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
