import React, { memo } from "react";
import { IonIcon } from "@ionic/react";
import { closeCircle, checkmarkCircle } from "ionicons/icons";
import { store, getList, getAchieves } from "../modules/Storage";

const MemoList = ({ item, achieves, setAcheives, list, setList }) => {
  const onDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
    getList().then((list) => {
      const parsedList = JSON.parse(list);
      const newList = parsedList.filter((item) => item.id !== id);
      store.set("list", JSON.stringify(newList));
    });
  };

  const onCheck = (value, id) => {
    setAcheives([...achieves, value]);
    setList(list.filter((item) => item.id !== id));
    getList().then((list) => {
      const parsedList = JSON.parse(list);
      const newList = parsedList.filter((item) => item.id !== id);
      store.set("list", JSON.stringify(newList));
    });
    getAchieves().then((achieves) => {
      const parsedList = JSON.parse(achieves);
      const newList = [...parsedList, value];
      store.set("achieves", JSON.stringify(newList));
    });
  };

  return (
    <li>
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
};

export default memo(MemoList);
