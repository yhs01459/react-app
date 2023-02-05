import { MdAdd } from "react-icons/md";
import { useState, useCallback } from "react";
import "./TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(""); //value 값 초기화
      e.preventDefault(); // submit 이벤트는 브라우저에서 새로고침을 발생시키기때문에 이를 방지하기 위한 함수 호출, 설정해주지 않으면 새로고침이 되면서 초기화된 Value가 설정된다.
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />

      <button type="submit">
        <MdAdd></MdAdd>
      </button>
    </form>
  );
};

export default TodoInsert;
