import { useContext, useEffect } from 'react';

import { TodoProvider } from '../../../providers/TodoProvider';
import API_SERVICE from '../../../services/api';

function TodoListItem({ todo }) {
  const { onTodoUpdate } = useContext(TodoProvider);

  useEffect(() => {
    (async () => {
      const item = await API_SERVICE.getTodoListItemAsync(todo.id);
      console.log('[TodoListItem]', item);
    })();
  }, [todo]);

  return (
    <div
      className={`list-group-item list-group-item-action ${
        todo.completed ? 'list-group-item-primary' : ''
      }`}
      onClick={() => onTodoUpdate(todo)}>
      {todo.title}
    </div>
  );
}

export default TodoListItem;
