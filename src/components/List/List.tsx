import { FC } from "react";
import { ITodo } from "../../interface/todos";
import Item from "../Item/Item";
interface PropsList {
  todos: ITodo[];
  removeTodo: (id: number) => void;
}

const List: FC<PropsList> = ({ todos, removeTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Item key={todo.id} {...todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default List;
