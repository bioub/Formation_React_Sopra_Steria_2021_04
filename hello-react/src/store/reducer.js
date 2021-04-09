import { combineReducers } from "redux";

const initialState = {
  prenom: "Romain",
  age: 35,
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

// 
// function todosReducer() {

// }

const reducer = combineReducers({
  prenom: prenomReducer,
  age: ageReducer,
});

export default reducer;