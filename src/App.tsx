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

  const toggleCompleted = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return { ...todo };
      })
    );
  };
  return (
    <div className="App">
      <Form onSubmit={onSubmit} />

      {todos.length > 0 ? <h2>Contacts: {todos.length}</h2> : null}
      {todos.length > 0 ? (
        <List
          todos={todos}
          removeTodo={removeTodo}
          toggleCompleted={toggleCompleted}
        />
      ) : (
        <h3> Please add a task </h3>
      )}
    </div>
  );
};

export default App;
