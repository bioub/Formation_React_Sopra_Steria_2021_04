import { combineReducers } from "redux";

import { ADD_TODO, CHANGE_TODO, DELETE_TODO } from "./constants";

const initialState = {
  prenom: "Romain",
  age: 35,
  todos: {
    newTodo: 'Achet',
    items: [{
      id: 1,
      title: 'Acheter du pain',
      completed: false,
    }, {
      id: 2,
      title: 'Aller au sport',
      completed: true,
    }, {
      id: 3,
      title: 'Utiliser Redux',
      completed: false,
    }],
  }
};

function prenomReducer(state = initialState.prenom, action) {
  switch (action.type) {
    case "change_prenom":
      return action.payload;
    default:
      return state;
  }
}

function ageReducer(state = initialState.age, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "increment_twice":
      return state + 2;
    default:
      return state;
  }
}

function todosReducer(state = initialState.todos, action) {
  switch (action.type) {
    case ADD_TODO:
      return  {
        ...state,
        items: [
          ...state.items,
          action.payload
        ]
      };
    case CHANGE_TODO:
      return {
        ...state,
        newTodo: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        items: state.items.filter((el) => el.id !== action.payload.id),
      }
    default:
      return state;
  }
}

const reducer = combineReducers({
  prenom: prenomReducer,
  age: ageReducer,
  todos: todosReducer
  // todos: combineReducers({
  //   items: itemsReducer,
  //   newTodo: newTodoReducer,
  // }),
});

export default reducer;