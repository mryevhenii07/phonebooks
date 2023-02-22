import { FC, useState } from "react";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";

import { ITodo } from "../../interface/todos";
import s from "./Item.module.css";
import EditItem from "../EditItem/EditItem";
import { removeTodo, toggleCompleted } from "../../store/todoSlice/todoSlice";
import { useAppDispatch } from "../../store/hooks";

interface PropsItem extends ITodo {}

const Item: FC<PropsItem> = ({ id, name, phone, completed }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const dispatch = useAppDispatch();

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
            onChange={() => dispatch(toggleCompleted(id))}
          />

          <div className={completed ? `${s.active}` : ""}>
            <span className={s.name}>{name}:</span>
            <span className={s.phone}>{phone}</span>
          </div>
        </div>

        <div>
          <AiTwotoneDelete
            onClick={() => dispatch(removeTodo(id))}
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
