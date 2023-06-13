import React, { useState, useCallback } from "react";
import { IonIcon } from "@ionic/react";
import { closeCircle, checkmarkCircle } from "ionicons/icons";
import MemoList from "./MemoList";

const ListForm = ({ achieves, setAcheives }) => {
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
    setId(id + 1);
    const newGoal = {
      id,
      value,
    };
    setList([...list, newGoal]);
    setValue("");
  };

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <>
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
              <MemoList
                item={item}
                key={item.id}
                achieves={achieves}
                setAcheives={setAcheives}
                list={list}
                setList={setList}
              />
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
    </>
  );
};

export default ListForm;
