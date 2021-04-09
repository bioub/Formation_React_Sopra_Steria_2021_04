import { useDispatch, useSelector } from "react-redux";

import { addTodo, changeTodo } from "../../store/actions";
import { newTodoSelector } from "../../store/selectors";
import TodoForm from "../TodoForm";

function TodoFormContainer() {
  const newTodo = useSelector(newTodoSelector);
  const dispatch = useDispatch();

  function handleNewTodoChange(newTodo) {
    dispatch(changeTodo(newTodo));
  }

  function handleAdd(newTodo) {
    dispatch(addTodo(newTodo));
  }

  return (
    <TodoForm
      newTodo={newTodo}
      onNewTodoChange={handleNewTodoChange}
      onAdd={handleAdd}
    />
  );
}

export default TodoFormContainer;
