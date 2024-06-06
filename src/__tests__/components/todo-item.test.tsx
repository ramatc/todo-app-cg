import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TodoItem from "../../components/todo-item";
import TodoContextProvider from "../../context/TodoContextProvider";

const mockTodo = {
  id: "1",
  task: "Tarea 1",
  completed: false,
};

describe("Pruebas en <CreateTodo />", () => {
  let todoCompleted: HTMLButtonElement;

  beforeEach(() => {
    render(
      <TodoContextProvider>
        <TodoItem todo={mockTodo} />
      </TodoContextProvider>
    );

    todoCompleted = screen.getByRole("button", {
      name: "todoButton",
    });
  });

  test("renderizando el listItem y los botones", () => {
    const todoListItem = screen.getByRole("listitem");
    expect(todoListItem).toBeInTheDocument();

    expect(todoCompleted).toBeInTheDocument();

    const removeButton = screen.getByRole("button", {
      name: "removeButton",
    });
    expect(removeButton).toBeInTheDocument();
  });

  //   test("marcar tarea como completada", () => {
  //     const todoText = screen.getByRole("generic", {
  //       name: "todoText",
  //     });

  //     fireEvent.click(todoCompleted);

  //     expect(todoText).toHaveClass(
  //       "MuiListItemText-root completed css-tlelie-MuiListItemText-root"
  //     );
  //   });
});
