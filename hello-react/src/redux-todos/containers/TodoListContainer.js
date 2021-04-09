import { useDispatch, useSelector } from "react-redux";

import { deleteTodo } from "../../store/actions";
import { todosItemsSelector } from "../../store/selectors";
import TodoList from "../TodoList";

function TodoListContainer() {
  const items = useSelector(todosItemsSelector);
  const dispatch = useDispatch();
  
  function handleDelete(todo) {
    dispatch(deleteTodo(todo));
  }

  return (
    <TodoList items={items} onDelete={handleDelete} />
  );
}

export default TodoListContainer;