import React, { memo } from "react";
import { IonIcon } from "@ionic/react";
import { closeCircle, checkmarkCircle } from "ionicons/icons";

const MemoList = ({ item, achieves, setAcheives, list, setList }) => {
  const onDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const onCheck = (value, id) => {
    setAcheives([...achieves, value]);
    setList(list.filter((item) => item.id !== id));
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
