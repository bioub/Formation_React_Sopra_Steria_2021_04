import TodoFormContainer from "./containers/TodoFormContainer";
import TodoListContainer from "./containers/TodoListContainer";

function Todos() {
  return (
    <div className="Todos">
      <TodoFormContainer />
      <TodoListContainer />
    </div>
  );
}

export default Todos;
