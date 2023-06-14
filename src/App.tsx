import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, list, personCircle } from "ionicons/icons";
import Home from "./pages/Home";
import List from "./pages/List";
import MyPage from "./pages/MyPage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => {
  const [days, setDays] = useState(0);
  const [achieves, setAchieves] = useState([]);
  const [records, setRecords] = useState([0]);

  // useEffect(() => {
  //   getArchieves().then((archives: string) => {
  //     setAchieves(JSON.parse(archives));
  //   });
  // }, [achieves]);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Redirect exact path="/" to="/home" />
            <Route
              path="/home"
              render={() => (
                <Home
                  days={days}
                  setDays={setDays}
                  records={records}
                  setRecords={setRecords}
                />
              )}
              exact={true}
            />
            <Route
              path="/list"
              render={() => (
                <List achieves={achieves} setAcheives={setAchieves} />
              )}
              exact={true}
            />
            <Route
              path="/mypage"
              render={() => (
                <MyPage
                  days={days}
                  achieves={achieves}
                  records={records}
                  setAchieves={setAchieves}
                />
              )}
              exact={true}
            />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
              <IonLabel>No Fap</IonLabel>
            </IonTabButton>
            <IonTabButton tab="memo" href="/list">
              <IonIcon icon={list} />
              <IonLabel>Goal List</IonLabel>
            </IonTabButton>
            <IonTabButton tab="mypage" href="/mypage">
              <IonIcon icon={personCircle} />
              <IonLabel>My Page</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
