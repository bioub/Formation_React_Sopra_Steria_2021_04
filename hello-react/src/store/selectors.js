export function newTodoSelector(state) {
  return state.todos.newTodo;
}

export function todosItemsSelector(state) {
  return state.todos.items;
}