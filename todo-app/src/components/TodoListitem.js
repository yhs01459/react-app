import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import "./TodoListitem.scss";
import cn from "classnames";

const TodoListitem = ({ todo, onRemove }) => {
  const { id, text, checked } = todo; //비구조화 할당

  return (
    <div className="TodoListitem">
      <div className={cn("checkbox", { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline></MdRemoveCircleOutline>
      </div>
    </div>
  );
};

export default TodoListitem;
