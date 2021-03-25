import "./todo-list.css";
import TodoListItem from "./TodoListItem";

function TodoList({ data = [], onTodoUpdate }) {
  return (
    <div className="row">
      <h2>Todo List</h2>
      <div className="col-12">
        <div className="list-group">
          {data.map((todo) => {
            return (
              <TodoListItem todo={todo} key={todo.id} onClick={onTodoUpdate} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
