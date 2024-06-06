import Box from "@mui/material/Box";
import List from "@mui/material/List";

import TodoItem from "./todo-item";
import { useTodoContext } from "../context/TodoContextProvider";

const TodoList = () => {
  const { todos } = useTodoContext();

  return (
    <Box sx={{ width: "100%", maxWidth: 1200 }} aria-label="todoList">
      <List
        sx={{
          p: 0,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
