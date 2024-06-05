import { Stack } from "@mui/material";
// import TodoItem from "./todo-item";
import { type Todo as TodoType } from "../types";

const TodoList = ({
  todos,
  handleRemove,
  handleCompleted,
}: {
  todos: TodoType[];
  handleRemove: (id: string) => void;
  handleCompleted: (id: string, completed: boolean) => void;
}) => {
  return (
    <Stack direction="column" gap={2} component="ul">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
          {todo.task}
          <button onClick={() => handleRemove(todo.id)}>Borrar</button>
          <button onClick={() => handleCompleted(todo.id, todo.completed)}>
            Completar
          </button>
        </li>
      ))}
    </Stack>
  );
};

export default TodoList;
