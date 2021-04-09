import { Component } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

class Todos extends Component {
  state = {
    loading: true,
    todos: [
      // {
      //   id: Math.random(),
      //   title: 'Pain',
      //   completed: false,
      // },
      // {
      //   id: Math.random(),
      //   title: 'Lait',
      //   completed: true,
      // }
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
      loading: true,
      newTodo: '',
      todos: [...todos, todo],
    });

    const headers = new Headers();
    headers.set('Content-type', 'application/json');

    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers
    })
      .then((res) => res.json())
      .then((todo) => {
        console.log('todo reçue de jsonplaceholder', todo);
        this.setState({
          loading: false,
        });
      });
  }
  handleDelete = (todo) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((el) => el.id !== todo.id)
    });
  }
  componentDidMount() {
    // requete AJAX vers le serveur (PHP, Java, Node.js...)
    // API Natif du navigateur : XMLHttpRequest, fetch (moderne)
    // Libs: axios
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((todos) => {
        this.setState({
          loading: false,
          todos
        });
      });
  }
  render() {
    const { todos, newTodo, loading } = this.state;
    return (
      <div className="Todos">
        <TodoForm newTodo={newTodo} onNewTodoChange={this.handleNewTodoChange} onAdd={this.handleAdd} />
        {loading && <div>Loading...</div>}
        <TodoList items={todos} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default Todos;