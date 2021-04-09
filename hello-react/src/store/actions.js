import { ADD_TODO, CHANGE_TODO, DELETE_TODO } from "./constants";

export function addTodo(title) {
  return {
    type: ADD_TODO,
    payload: {
      id: Math.random(),
      title,
      completed: false,
    }
  }
}

export function deleteTodo(todo) {
  return {
    type: DELETE_TODO,
    payload: todo,
  };
}

export function changeTodo(newTodo) {
  return {
    type: CHANGE_TODO,
    payload: newTodo,
  };
}