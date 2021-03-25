function TodoListItem({ todo, onClick }) {
  return (
    <div
      className={`list-group-item list-group-item-action ${
        todo.completed ? "list-group-item-primary" : ""
      }`}
      onClick={() => onClick(todo)}
    >
      {todo.title}
    </div>
  );
}

export default TodoListItem;
