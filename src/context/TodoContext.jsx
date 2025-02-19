import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const defaultTodo = {
    id: 1,
    title: "",
    content: "",
    isDone: false,
  };
  const [input, setInput] = useState(defaultTodo);
  const [todos, setTodos] = useState([]);

  return (
    <TodoContext.Provider
      value={(defaultTodo, input, setInput, todos, setTodos)}
    >
      {children}
    </TodoContext.Provider>
  );
};
