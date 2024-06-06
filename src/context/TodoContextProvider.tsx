import { createContext, useState, useContext, useEffect } from "react";
import { Todo } from "../types";

interface TodoContextType {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  handleRemove: (id: string) => void;
  handleRemoveAllCompleted: () => void;
  handleCompleted: (id: string, completed: boolean) => void;
  handleAdd: (task: string) => void;
  pendingTasks: number;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error(
      "useTodoContext debe ser usado dentro de TodoContextProvider"
    );
  }

  return context;
};

const TodoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>(() =>
    JSON.parse(localStorage.getItem("todos") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (task: string) => {
    const newTodo = {
      id: crypto.randomUUID(),
      task: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const handleCompleted = (id: string, completed: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !completed,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const handleRemove = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleRemoveAllCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const pendingTasks = todos.filter((todo) => !todo.completed).length;

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        handleAdd,
        handleCompleted,
        handleRemove,
        handleRemoveAllCompleted,
        pendingTasks,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
