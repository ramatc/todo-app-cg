import { Container, Stack, Typography, Button } from "@mui/material";

import TodoList from "./todo-list";
import CreateTodo from "./create-todo";
import { useTodoContext } from "../context/TodoContextProvider";

const AppContent = () => {
  const { todos, pendingTasks, handleRemoveAllCompleted } = useTodoContext();

  return (
    <main className="fade-in">
      <Container sx={{ height: "100vh" }} maxWidth="sm">
        <Typography
          variant="h1"
          sx={{
            fontSize: "2rem",
            pt: 4,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Todo App | Consultoría {""}
          <Typography
            component="span"
            sx={{ fontSize: "2rem", color: "#498bb7", fontWeight: "bold" }}
          >
            Global
          </Typography>
        </Typography>
        <CreateTodo />
        <TodoList />
        <Stack
          direction="row"
          gap={2}
          sx={{ pt: 2, fontSize: 18 }}
          justifyContent="space-between"
        >
          <Typography alignSelf="center" aria-label="pendingTasks">
            Tareas pendientes: {pendingTasks}
          </Typography>

          <Button
            variant="outlined"
            onClick={handleRemoveAllCompleted}
            disabled={todos.length <= 0}
            aria-label="btnRemoveAllCompleted"
          >
            Borrar completadas
          </Button>
        </Stack>
      </Container>
    </main>
  );
};

export default AppContent;
