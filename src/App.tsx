import { FC, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { ITodo } from "./interface/todos";

import { useAppDispatch, useAppSelector } from "../src/store/hooks";
import { addTodo } from "./store/todoSlice/todoSlice";

const App: FC = () => {
  // const [todos, setTodos] = useState<ITodo[]>([]);
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.list);

  console.log(todos);

  const onSubmit = (date: any) => {
    dispatch(addTodo(date));
    // setTodos([...todos, date]);
  };

  // const removeTodo = (id: number) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };

  // const toggleCompleted = (id: number) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id === id) {
  //         return { ...todo, completed: !todo.completed };
  //       }
  //       return { ...todo };
  //     })
  //   );
  // };
  return (
    <div className="App">
      <Form onSubmit={onSubmit} />

      {todos.length > 0 ? <h2>Contacts: {todos.length}</h2> : null}
      {todos.length > 0 ? <List /> : <h3> Please add a task </h3>}
    </div>
  );
};

export default App;
