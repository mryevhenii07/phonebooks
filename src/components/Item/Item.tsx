import { FC } from "react";
import { ITodo } from "../../interface/todos";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";

import s from "./Item.module.css";

interface PropsItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleCompleted: (id: number) => void;
}

const Item: FC<PropsItem> = ({
  id,
  name,
  phone,
  completed,
  removeTodo,
  toggleCompleted,
}) => {
  return (
    <li className={s.list}>
      <div className={s.wrapLeftBlock}>
        <input
          type="checkbox"
          checked={completed}
          className={s.input}
          onChange={() => toggleCompleted(id)}
        />

        <div>
          <span className={s.name}>{name}:</span>
          <span className={s.phone}>{phone}</span>
        </div>
      </div>

      <div>
        <AiTwotoneDelete onClick={() => removeTodo(id)} className={s.delete} />
        <AiTwotoneEdit className={s.edit} />
      </div>
    </li>
  );
};

export default Item;
