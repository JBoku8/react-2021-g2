import { useContext } from 'react';
import TodoListItem from './TodoListItem';
import { TodoProvider } from '../../../providers/TodoProvider';
import './todo-list.css';

function TodoList() {
  const { todoList } = useContext(TodoProvider);

  return (
    <div className="row">
      <h2>Todo List</h2>
      <div className="col-12">
        <div className="list-group">
          {todoList.map((todo) => {
            return <TodoListItem todo={todo} key={todo.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
