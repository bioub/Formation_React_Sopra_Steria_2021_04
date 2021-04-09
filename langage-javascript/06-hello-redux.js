const { createStore } = require("redux");

// const nextState = reducer(state, action)
// pure function
// - ne modifie pas ses paramètres (doit créer un nouveau state,
// le state doit etre un objet immuable)
// - prédictive, appelée avec des paramètres identiques elle a
// toujours le même retour
// ex de fonction prédictive : sum(1, 2) === 3
// ex de fonctioon non-prédictive : Math.random() === ????
// - elle ne doit pas avoir de side effect, pas d'appels à des
// API externe, type requete AJAX/HTTP, cookie, localStorage
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

// au premier reducer(undefined, { type: 'click' })

/** @type {import('redux').Store} */
const store = createStore(reducer);

const state = store.getState();
console.log("state initial", state);

store.subscribe(() => {
  const state = store.getState();
  console.log("state après dispatch", state);
});

// setState -> state
// dispatch -> reducer -> state -> subscribe
store.dispatch({ type: "click" });
store.dispatch({ type: "doubleclick" });
store.dispatch({ type: "tripleclick" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment_twice" });

// const buttonEl = document.createElement('button');
// const event = new Event('tripleclick');
// console.log(event.type); // 'tripleclick'
// buttonEl.dispatchEvent(event);
// buttonEl.addEventListener('tripleclick', () => {});
