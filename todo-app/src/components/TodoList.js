import TodoListitem from "./TodoListitem";
import "./TodoList.scss";

const TodoList = () => {
  return (
    <div className="TodoList">
      <TodoListitem></TodoListitem>
      <TodoListitem></TodoListitem>
      <TodoListitem></TodoListitem>
    </div>
  );
};

export default TodoList;
