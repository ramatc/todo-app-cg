import { Container, Typography } from "@mui/material";
import { useState } from "react";
import TodoList from "./components/todo-list";
import CreateTodo from "./components/create-todo";

const mockTodos = [
  { id: "1", task: "Tarea 1", completed: false },
  { id: "2", task: "Tarea 2", completed: false },
  { id: "3", task: "Tarea 3", completed: false },
];

function App() {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleRemoveAllCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const handleCompleted = (id: string, completed: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !completed,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const handleAdd = (task: string) => {
    const newTodo = {
      id: crypto.randomUUID(),
      task: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const pendingTasks = todos.filter((todo) => !todo.completed).length;

  return (
    <main className="fade-in">
      <Container sx={{ height: "100vh" }} maxWidth="sm">
        <Typography variant="h1" sx={{ fontSize: "3rem", pt: 4 }}>
          TODO APP {pendingTasks}
        </Typography>
        <CreateTodo handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          handleRemove={handleRemove}
          handleCompleted={handleCompleted}
        />
      </Container>
    </main>
  );
}

export default App;
