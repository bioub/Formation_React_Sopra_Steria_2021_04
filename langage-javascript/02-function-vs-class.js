// fonction classique
function hello(name) {
  return 'Hello ' + name;
}

console.log(hello('Romain')); // Hello Romain
console.log(hello('Eric')); // Hello Eric

// fonction constructeur
// function Contact(name) {
//   this.name = name;
//   // this.hello = function() {
//   //   return 'Hello ' + this.name;
//   // }
// }

// Contact.prototype.hello = function() {
//   return 'Hello ' + this.name;
// };

// ES2015 : class
class Contact {
  constructor(name) {
    this.name = name;
    // propriété hello
    this.hello = function() {
      return '(objet) Hello ' + this.name;
    }
  }
  // Contact.prototype.hello
  hello() {
    return '(prototype) Hello ' + this.name;
  }
}

const romain = new Contact('Romain');
console.log(romain.name); // Romain
console.log(romain.hello()); // Hello Romain
console.log(typeof Contact); // function
console.log(typeof Contact.prototype.hello); // function

const eric = new Contact('Eric');
console.log(eric.name); // Eric
console.log(eric.hello()); // Hello Eric
