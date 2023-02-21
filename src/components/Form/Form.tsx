import { FC, useState } from "react";
import { ITodo } from "../../interface/todos";

interface PropsForm {
  onSubmit: (date: any) => void;
  todos: ITodo[];
}

const Form: FC<PropsForm> = ({ onSubmit }) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      phone,
      id: Date.now(),
      completed: false,
    });

    setName("");
    setPhone("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Add a number</button>
      </form>
    </>
  );
};

export default Form;
