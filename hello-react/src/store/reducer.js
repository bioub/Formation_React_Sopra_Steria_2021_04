const initialState = {
  prenom: "Romain",
  age: 35,
};

function reducer(state = initialState, action) {
  // if (action.type === 'increment') {
  //   return {
  //     ...state, // les clés/valeurs de l'ancien
  //     age: state.age + 1
  //   };
  // }
  // return state;
  switch (action.type) {
    case "increment":
      return {
        ...state, // les clés/valeurs de l'ancien
        age: state.age + 1,
      };
    case "increment_twice":
      return {
        ...state, // les clés/valeurs de l'ancien
        age: state.age + 2,
      };
    default:
      return state;
  }
}

export default reducer;