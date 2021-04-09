

function TodoForm({ newTodo, onNewTodoChange, onAdd }) {
  function handleSubmit(event) {
    event.preventDefault();
    onAdd(newTodo);
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input value={newTodo} onChange={(e) => onNewTodoChange(e.target.value)} />
      <button>+</button>
    </form>
  );
}

export default TodoForm;