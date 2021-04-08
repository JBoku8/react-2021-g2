import AddTodoForm from '../../components/forms/add-todo-form';
import TodoList from '../../components/list/todo-list';
import TodoProviderComponent from '../../providers/TodoProvider';

function TodoHome(props) {
  return (
    <TodoProviderComponent>
      <div className="row">
        <h1>Todo</h1>
        <div className="col-6">
          <AddTodoForm />
        </div>
        <div className="col-6">
          <TodoList />
        </div>
      </div>
    </TodoProviderComponent>
  );
}

export default TodoHome;
