import { FC } from "react";
import { ITodo } from "../../interface/todos";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";

interface PropsItem extends ITodo {
  removeTodo: (id: number) => void;
}

const Item: FC<PropsItem> = ({ id, name, phone, completed, removeTodo }) => {
  return (
    <div>
      <input type="checkbox" checked={completed} />

      <div>
        <span>{name}</span>
        <span>{phone}</span>
      </div>

      <AiTwotoneDelete onClick={() => removeTodo(id)} />
      <AiTwotoneEdit />
    </div>
  );
};

export default Item;
