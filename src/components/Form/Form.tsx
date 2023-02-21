import { FC, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { ITodo } from "../../interface/todos";
import s from "./Form.module.css";

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
    <Box
      className={s.form}
      onSubmit={handleSubmit}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-multiline-flexible"
        label="Name"
        multiline
        maxRows={4}
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Phone"
        multiline
        maxRows={4}
        type="text"
        placeholder="+380683985357"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <Button type="submit" variant="contained" disableElevation>
        Add a number
      </Button>
    </Box>
  );
};

export default Form;
