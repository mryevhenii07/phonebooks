import { FC, useState } from "react";
import { ITodo } from "../../interface/todos";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";

import s from "./Item.module.css";
import EditItem from "../EditItem/EditItem";

interface PropsItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleCompleted: (id: number) => void;
  // onSubmit: (date: any) => void;
}

const Item: FC<PropsItem> = ({
  id,
  name,
  phone,
  completed,
  removeTodo,
  toggleCompleted,
}) => {
  const [edit, setEdit] = useState<boolean>(false);

  const toggleHandle = () => {
    setEdit(!edit);
  };
  return (
    <>
      <li className={s.list}>
        <div className={s.wrapLeftBlock}>
          <input
            type="checkbox"
            checked={completed}
            className={s.input}
            onChange={() => toggleCompleted(id)}
          />

          <div className={completed ? `${s.active}` : ""}>
            <span className={s.name}>{name}:</span>
            <span className={s.phone}>{phone}</span>
          </div>
        </div>

        <div>
          <AiTwotoneDelete
            onClick={() => removeTodo(id)}
            className={s.delete}
          />
          <AiTwotoneEdit className={s.edit} onClick={toggleHandle} />
        </div>
      </li>
      {edit ? <EditItem data={[{ id, name, phone, completed }]} /> : null}
    </>
  );
};

export default Item;
