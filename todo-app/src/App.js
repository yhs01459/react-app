import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert></TodoInsert>
      <TodoList></TodoList>
    </TodoTemplate>
  );
};

export default App;
