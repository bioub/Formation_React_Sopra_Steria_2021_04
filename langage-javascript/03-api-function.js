// L'objet global est globalThis (window dans le browser ou global dans Node.js)

// En mode strict, this n'existe pas (undefined)
// Mode apparu en ES5 (2009), désactive des fonctionnalités du langage qui sont
// des mauvaises pratiques
// Si on utilise import ou export, pas besoin d'activer le mode strict (on est déjà strict)
// 'use strict';
// import fs from 'fs';

globalThis.name = 'Romain (variable name globale)';

function hello(n1, n2) {
  return `Hello ${n1}, ${n2}, my name is ${this.name}`;
}

console.log(hello('Jean', 'Eric'));

const user = {
  name: 'Romain (clé name de l\'objet user)',
};

console.log(hello.call(user, 'Jean', 'Eric'));
console.log(hello.apply(user, ['Jean', 'Eric']));

const userHello = hello.bind(user);
console.log(userHello('Jean', 'Eric'));
