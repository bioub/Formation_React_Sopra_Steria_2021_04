import TodoItem from "./TodoItem";

function TodoList({items, onDelete}) {
  return (
    <div className="TodoList">
      {items.map((el) => <TodoItem key={el.id} item={el} onDelete={onDelete} />)}
    </div>
  );
}

export default TodoList;