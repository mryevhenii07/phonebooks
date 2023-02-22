import { FC } from "react";
import { ITodo } from "../../interface/todos";
import Item from "../Item/Item";
import { useAppSelector } from "../../store/hooks";
// interface PropsList {
//   todos: ITodo[];
//   removeTodo: (id: number) => void;
//   toggleCompleted: (id: number) => void;

// }

const List: FC = () => {
  const todos = useAppSelector((state) => state.todos.list);
  return (
    <div>
      {todos.map((todo) => (
        <Item key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default List;
