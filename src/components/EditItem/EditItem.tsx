import { FC, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { ITodo } from "../../interface/todos";
import s from "../Form/Form.module.css";
import { useAppDispatch } from "../../store/hooks";
import { addTodo } from "../../store/todoSlice/todoSlice";

interface PropsEdit {
  data: ITodo[];
  //  onSubmit:(date: any)=>void
}

const Form: FC<PropsEdit> = ({ data }) => {
  const dispatch = useAppDispatch();
  console.log(data);

  const [editName, setEditName] = useState(data[0].name);
  const [editPhone, setEditPhone] = useState(data[0].phone);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(addTodo());
    // setEditPizza([...editPixxa,{
    //     editName,
    //     editPhone,
    //   id: Date.now(),
    //   completed: false,
    // }]);

    setEditName("");
    setEditPhone("");
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
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Phone"
        multiline
        maxRows={4}
        type="text"
        placeholder="+380683985357"
        value={editPhone}
        onChange={(e) => setEditPhone(e.target.value)}
      />

      <Button type="submit" variant="contained" disableElevation>
        Confirm changes
      </Button>
    </Box>
  );
};

export default Form;
