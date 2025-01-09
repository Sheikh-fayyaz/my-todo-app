import { FaTrash } from "react-icons/fa";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="todo-item">
      <span>{todo}</span>
      <button onClick={onDelete}>
        <FaTrash />
      </button>
    </div>
  );
};

export default TodoItem;
