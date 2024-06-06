import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AppContent from "../../components/app-content";
import TodoContextProvider from "../../context/TodoContextProvider";

describe("Pruebas en <AppContent />", () => {
  beforeEach(() => {
    render(
      <TodoContextProvider>
        <AppContent />
      </TodoContextProvider>
    );
  });

  test("renderizando los componentes de la página principal", () => {
    const headerText = screen.getByRole("heading");
    expect(headerText).toBeInTheDocument();

    const createTodo = screen.getByRole("form", {
      name: "createTodoForm",
    });
    expect(createTodo).toBeInTheDocument();

    const todoList = screen.getByRole("list");
    expect(todoList).toBeInTheDocument();

    const removeButton = screen.getByRole("button", {
      name: "btnRemoveAllCompleted",
    });
    expect(removeButton).toBeInTheDocument();
    expect(removeButton).toBeDisabled();
  });

  test("muestra correctamente el recuento de tareas pendientes", () => {
    const pendingTasks = screen.getByRole("paragraph");
    expect(pendingTasks).toHaveTextContent("Tareas pendientes: 0");
  });
});
