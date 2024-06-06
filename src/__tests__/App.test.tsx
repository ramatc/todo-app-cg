import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../App";

describe("Pruebas en <App />", () => {
  test("renderizando la página principal", () => {
    render(<App />);
  });
});
