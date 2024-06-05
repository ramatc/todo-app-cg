const TodoItem = ({ id, title, completed }) => {
  return (
    <div>
      <input
        className="toggle"
        type="checkbox"
        onChange={() => 1}
        checked={completed}
      />
      <label>{title}</label>
      <button className="destroy"></button>
    </div>
  );
};

export default TodoItem;
