import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonIcon } from "@ionic/react";
import { closeCircle, checkmarkCircle } from "ionicons/icons";
import "./common.css";
import "./memo.css";

const List = () => {
  const [value, setValue] = useState("");
  const [id, setId] = useState(1);
  const [list, setList] = useState([
    {
      id: 0,
      value: "몸 만들기",
    },
  ]);

  useEffect(() => {
    console.log(list);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return;
    }
    setId((prevId) => prevId + 1);
    const newGoal = {
      id,
      value,
    };
    setList((prevList) => [...prevList, newGoal]);
    setValue("");
    console.log(list);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <h1 className="page-title">목표 리스트</h1>
        <p className="sub-title">여정을 하면서 달성할 목표를 적어주세요</p>
        <form className="memo-form">
          <input
            type="text"
            placeholder="목표를 적어주세요"
            value={value}
            onChange={onChange}
          />
          <button type="button" className="primary-btn" onClick={onSubmit}>
            입력
          </button>
        </form>
        <ul className="memo-list">
          {list.map((item) => {
            return (
              <li key={item.id}>
                <p>{item.value}</p>
                <div className="btns-container">
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => onDelete(item.id)}
                  >
                    <IonIcon icon={closeCircle} />
                  </button>
                  <button type="button" className="check-btn">
                    <IonIcon icon={checkmarkCircle} />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </IonContent>
    </IonPage>
  );
};

export default List;
