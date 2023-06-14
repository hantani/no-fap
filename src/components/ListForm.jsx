import React, { useState, useCallback, useEffect } from "react";
import MemoList from "./MemoList";
import { store, getList } from "../modules/Storage";

const ListForm = ({ achieves, setAcheives }) => {
  const [value, setValue] = useState("");
  const [id, setId] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    getList().then((list) => {
      setList(JSON.parse(list));
    });
  }, []);

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
    getList().then((list) => {
      const prevList = JSON.parse(list);
      const newList = [...prevList, newGoal];
      store.set("list", JSON.stringify(newList));
    });
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
