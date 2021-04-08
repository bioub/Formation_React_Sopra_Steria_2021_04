// function Hello() {
//   // DOM
//   const divEl = document.createElement('div');
//   divEl.className = 'Hello';
//   divEl.id = 'Hello';
//   divEl.title = 'Hello !!!'
//   divEl.lang = 'fr-FR';

//   divEl.innerText = 'Hello ';

//   const bEl = document.createElement('b');
//   bEl.innerText = 'World';
//   divEl.appendChild(bEl);

//   document.body.appendChild(divEl);

//   return null;
// }
// import React from "react";

// function Hello() {
//   return React.createElement(
//     "div",
//     {
//       className: "Hello",
//       id: "Hello",
//       title: "Hello !!!",
//       lang: "fr-FR",
//     },
//     "Hello ",
//     React.createElement("b", {}, "World")
//   );
// }

import React from "react";

// /**
//  * @param {object} props 
//  * @param {string} props.name Le prénom 
//  * @param {number} props.age L'age
//  * @param {boolean} props.isTrainer Est-il formateur ?
//  */
// function Hello(props) {
//   return (
//     <div className="Hello" title="Hello !!" lang="fr-FR">
//       Hello <b>{props.name}</b>
//     </div>
//   );
// }

function Hello({ name = 'World', age = 0, isTrainer = false }) {
  return (
    <div className="Hello" title="Hello !!" lang="fr-FR">
      Hello my name is <b>{name}</b>, I'm {age}.
    </div>
  );
}

export default Hello;
