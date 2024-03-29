const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input type="checkbox"></input>
      <span>예제 텍스트</span>
      <button>삭제</button>
    </div>
  );
};

const Todos = (input, todos, onChangeInput, onInsert, onToggle, onRemove) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input></input>
        <button type="submit">등록</button>
      </form>
      <div>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
      </div>
    </div>
  );
};

export default Todos;
