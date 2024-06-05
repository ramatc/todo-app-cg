import CreateTodo from "./create-todo";

const Header = ({ handleAdd }) => {
  return (
    <header>
      <CreateTodo handleAdd={handleAdd} />
    </header>
  );
};

export default Header;
