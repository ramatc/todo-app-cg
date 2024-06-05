import React, { useState } from "react";

const CreateTodo = ({ handleAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleAdd(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        placeholder="Ingresa una tarea"
        autoFocus
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
    </form>
  );
};

export default CreateTodo;
