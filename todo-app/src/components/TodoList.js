import TodoListitem from "./TodoListitem";
import "./TodoList.scss";

const TodoList = ({ todos, onRemove }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListitem todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default TodoList;
