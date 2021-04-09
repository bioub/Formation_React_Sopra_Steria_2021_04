import { Component } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

class Todos extends Component {
  state = {
    todos: [
      {
        id: Math.random(),
        title: 'Pain',
        completed: false,
      },
      {
        id: Math.random(),
        title: 'Lait',
        completed: true,
      }
    ],
    newTodo: 'Beurre',
  }
  handleNewTodoChange = (newTodo) => {
    this.setState({
      newTodo
    });
  }
  handleAdd = (newTodo) => {
    const { todos } = this.state;
    const todo = {
      id: Math.random(),
      title: newTodo,
      completed: false,
    };

    this.setState({
      newTodo: '',
      todos: [...todos, todo],
    });
  }
  handleDelete = (todo) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((el) => el.id !== todo.id)
    });
  }
  render() {
    const { todos, newTodo } = this.state;
    return (
      <div className="Todos">
        <TodoForm newTodo={newTodo} onNewTodoChange={this.handleNewTodoChange} onAdd={this.handleAdd} />
        <TodoList items={todos} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default Todos;