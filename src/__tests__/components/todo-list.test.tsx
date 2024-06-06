import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TodoList from "../../components/todo-list";
import TodoContextProvider from "../../context/TodoContextProvider";

describe("Pruebas en <TodoList />", () => {
  beforeEach(() => {
    render(
      <TodoContextProvider>
        <TodoList />
      </TodoContextProvider>
    );
  });

  test("renderizando la página principal", () => {
    const todoList = screen.getByRole("list");
    expect(todoList).toBeInTheDocument();
  });
});
