import { FC, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { ITodo } from "./interface/todos";

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  console.log(todos);

  const onSubmit = (date: any) => {
    setTodos([...todos, date]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="App">
      <Form onSubmit={onSubmit} todos={todos} />
      <List todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
