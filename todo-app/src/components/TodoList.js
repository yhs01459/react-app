import TodoListitem from "./TodoListitem";
import "./TodoList.scss";

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListitem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
