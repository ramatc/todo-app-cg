import { Todo } from "../types";

const Footer = ({ todos }: { todos: Todo[] }) => {
  return (
    <footer>
      <span>{todos.length}</span> tareas pendientes
    </footer>
  );
};

export default Footer;
