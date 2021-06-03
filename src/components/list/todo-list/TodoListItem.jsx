import classNames from 'classnames';
import { useContext, useEffect } from 'react';

import { TodoProvider } from '../../../providers/TodoProvider';
import { API_SERVICE } from '../../../services/api';

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
      className={classNames('list-group-item list-group-item-action', {
        'list-group-item-primary': todo.completed,
      })}
      onClick={() => onTodoUpdate(todo)}
      onKeyPress={() => {}}>
      {todo.title}
    </div>
  );
}

export default TodoListItem;
