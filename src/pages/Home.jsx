import { IonContent, IonPage, useIonAlert, IonIcon } from "@ionic/react";
import { refreshCircle } from "ionicons/icons";
import { useEffect, useState } from "react";
import Profile from "../components/Profile";
import "./common.css";
import "./Home.css";
import TimeTable from "../components/TimeTable";
import HomeTitle from "../components/HomeTitle";

const Home = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [presentAlert] = useIonAlert();

  useEffect(() => {
    const tick = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((prevMinutes) => prevMinutes + 1);
    }
    if (minutes === 60) {
      setMinutes(0);
      setHours((prevHours) => prevHours + 1);
    }
    if (hours === 24) {
      setHours(0);
      setDays((prevDays) => prevDays + 1);
    }
    return () => {
      clearInterval(tick);
    };
  }, [seconds === 60, minutes === 60, hours === 24]);

  const refreshClick = () => {
    presentAlert({
      header: "초기화",
      subHeader: "과거로 돌아가시겠습니까?",
      buttons: [
        {
          text: "취소",
          role: "cancel",
        },
        {
          text: "확인",
          role: "confirm",
          handler: () => {
            setDays(0);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
          },
        },
      ],
    });
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <HomeTitle days={days} />
        <Profile days={days} />
        <TimeTable
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
        <div className="refresh-btn-container">
          <button type="button" onClick={refreshClick}>
            <IonIcon icon={refreshCircle} />
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
