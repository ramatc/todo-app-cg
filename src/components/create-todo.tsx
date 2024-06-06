import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";

import { useTodoContext } from "../context/TodoContextProvider";

const CreateTodo = () => {
  const { handleAdd } = useTodoContext();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (inputValue) handleAdd(inputValue);
    setInputValue("");
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      component="form"
      onSubmit={handleSubmit}
      sx={{ my: 3 }}
      aria-label="createTodoForm"
    >
      <TextField
        label="Ingrese una tarea"
        color="primary"
        focused
        value={inputValue}
        autoFocus
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        required
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit">
        Agregar
      </Button>
    </Stack>
  );
};

export default CreateTodo;
