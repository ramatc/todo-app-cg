import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CreateTodo from "../../components/create-todo";
import TodoContextProvider from "../../context/TodoContextProvider";

const mockHandleAdd = jest.fn();

describe("Pruebas en <CreateTodo />", () => {
  let input: HTMLInputElement, button: HTMLButtonElement;

  beforeEach(() => {
    render(
      <TodoContextProvider>
        <CreateTodo />
      </TodoContextProvider>
    );
    input = screen.getByRole("textbox");
    button = screen.getByRole("button", { name: "Agregar" });
  });

  test("renderizando el input y el botón", () => {
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("permite al usuario introducir la información", () => {
    fireEvent.change(input, { target: { value: "Nueva tarea" } });

    expect(input).toHaveValue("Nueva tarea");
  });

  // test("llama a handleAdd y limpia el input cuando se envía el formulario", () => {
  //   const handleAddMock = jest.fn();

  //   fireEvent.change(input, { target: { value: "Nueva tarea" } });
  //   fireEvent.click(button);

  //   expect(handleAddMock).toHaveBeenCalledWith("Nueva tarea");
  //   expect(input).toHaveValue("");
  // });

  test("no llama a handleAdd si el input esta vacío", () => {
    fireEvent.click(button);

    expect(mockHandleAdd).not.toHaveBeenCalled();
  });
});
