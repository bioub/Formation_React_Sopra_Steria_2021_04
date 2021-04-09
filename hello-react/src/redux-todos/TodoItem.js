function TodoItem({item, onDelete}) {
  return (
    <div className="TodoItem">
      <input type="checkbox" defaultChecked={item.completed} />
      {item.title}
      <button onClick={() => onDelete(item)}>-</button>
    </div>
  );
}

export default TodoItem;