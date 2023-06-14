import React, { memo, useCallback } from "react";
import { useIonAlert, IonIcon } from "@ionic/react";
import { refreshCircle } from "ionicons/icons";
import { store } from "../modules/Storage";

const RefreshBtn = ({ setDays, setHours, setMinutes, setSeconds }) => {
  const [presentAlert] = useIonAlert();

  const refreshClick = useCallback(() => {
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
            store.clear();
            store.set("days", 0);
            store.set("hours", 0);
            store.set("minutes", 0);
            store.set("seconds", 0);
          },
        },
      ],
    });
  }, []);

  return (
    <div className="refresh-btn-container">
      <button type="button" onClick={refreshClick}>
        <IonIcon icon={refreshCircle} />
      </button>
    </div>
  );
};

export default memo(RefreshBtn);
