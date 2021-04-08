import React, { useState, useEffect } from 'react';
import { API_SERVICE } from '../services/api';

export const TodoProvider = React.createContext(null);

// Provider -> store values
// Consumer -> use values

function TodoProviderComponent({ children }) {
  const [todoList, setTodoList] = useState([]);

  // useEffect(() => {
  //   API_SERVICE.getTodoList({ start: 5, callback: setTodoList });
  // }, []);

  useEffect(() => {
    // IIFE
    (async () => {
      const result = await API_SERVICE.getTodoListAsync({ limit: 5 });
      setTodoList(result);
    })();
  }, []);

  const onAddTodo = (newTodo) => {
    // newObject !== oldObject
    setTodoList([...todoList, newTodo]);
  };

  const onTodoUpdate = (todo) => {
    if (!todo.completed) {
      const index = todoList.findIndex((el) => el.id === todo.id);

      const newState = [
        ...todoList.slice(0, index),
        {
          ...todo,
          completed: !todo.completed,
        },
        ...todoList.slice(index + 1),
      ];

      setTodoList(newState);
    } else {
      const newState = todoList.filter((el) => el.id !== todo.id);
      setTodoList(newState);
    }
  };

  return (
    <TodoProvider.Provider
      value={{
        todoList,
        setTodoList,
        onAddTodo,
        onTodoUpdate,
      }}>
      {children}
    </TodoProvider.Provider>
  );
}

export default TodoProviderComponent;
