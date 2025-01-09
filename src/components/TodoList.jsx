import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete }) => {
  return (
    <div className="todo-list">
      {todos.length ? (
        todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} onDelete={() => onDelete(index)} />
        ))
      ) : (
        <p>No tasks yet! Add one above.</p>
      )}
    </div>
  );
};

export default TodoList;
