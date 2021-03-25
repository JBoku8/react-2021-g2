import { useState } from "react";
import AddTodoForm from "../../components/forms/add-todo-form";
import TodoList from "../../components/list/todo-list";

import { TodoListArray } from "../../data/todo-list";

function TodoHome(props) {
  const [todoList, setTodoList] = useState(TodoListArray);

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
    <div className="row">
      <h1>Todo</h1>
      <div className="col-6">
        <AddTodoForm onAddTodo={onAddTodo} />
      </div>
      <div className="col-6">
        <TodoList data={todoList} onTodoUpdate={onTodoUpdate} />
      </div>
    </div>
  );
}

export default TodoHome;
