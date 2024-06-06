import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import { useTodoContext } from "../context/TodoContextProvider";
import { Todo } from "../types";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { handleCompleted, handleRemove } = useTodoContext();

  return (
    <>
      <ListItem disablePadding key={todo.id} className="fade-in">
        <ListItemButton
          onClick={() => handleCompleted(todo.id, todo.completed)}
        >
          <ListItemText
            primary={todo.task}
            className={`${todo.completed ? "completed" : ""}`}
          />
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <IconButton aria-label="delete" onClick={() => handleRemove(todo.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
      <Divider />
    </>
  );
};

export default TodoItem;
