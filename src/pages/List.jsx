import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonIcon } from "@ionic/react";
import { closeCircle, checkmarkCircle } from "ionicons/icons";
import "./common.css";
import "./list.css";

const List = ({ achieves, setAcheives }) => {
  const [value, setValue] = useState("");
  const [id, setId] = useState(1);
  const [list, setList] = useState([
    {
      id: 0,
      value: "몸 만들기",
    },
  ]);

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

  const onCheck = (value, id) => {
    setAcheives([...achieves, value]);
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <h1 className="page-title">목표 리스트</h1>
        <p className="sub-title">여정을 하면서 달성할 목표를 적어주세요</p>
        <form className="memo-form" onSubmit={onSubmit}>
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
        {list.length > 0 ? (
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
                      <IonIcon
                        icon={checkmarkCircle}
                        onClick={() => onCheck(item.value, item.id)}
                      />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="no-list">
            <div>
              <span role="img" aria-label="writing hand">
                ✍
              </span>
            </div>
            <p>목표를 달성해서 성취감을 느껴보세요!</p>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default List;
