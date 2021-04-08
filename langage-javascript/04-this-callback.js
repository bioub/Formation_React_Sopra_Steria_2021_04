// class User {
//   constructor() {
//     this.name = 'Romain';
//   }
//   handleTimeout() {
//     console.log(`Hello my name is ${this.name}`);
//   }
//   render() {
//     setTimeout(function() {
//       console.log(`Hello my name is ${this.name}`);
//     }, 1000);
//   }
// }

// const user = new User();
// user.render(); // this n'est pas la bonne valeur

// class User {
//   constructor() {
//     this.name = 'Romain';
//   }
//   handleTimeout() {
//     console.log(`Hello my name is ${this.name}`);
//   }
//   render() {
//     var that = this;
//     setTimeout(function() {
//       console.log(`Hello my name is ${that.name}`);
//     }, 1000);
//   }
// }

// const user = new User();
// user.render(); // this n'est pas la bonne valeur mais that si

// class User {
//   constructor() {
//     this.name = 'Romain';
//   }
//   handleTimeout() {
//     console.log(`Hello my name is ${this.name}`);
//   }
//   render() {
//     setTimeout(function() {
//       console.log(`Hello my name is ${this.name}`);
//     }.bind(this), 1000);
//   }
// }

// const user = new User();
// user.render(); // this a été forcé

// class User {
//   constructor() {
//     this.name = 'Romain';
//   }
//   handleTimeout() {
//     console.log(`Hello my name is ${this.name}`);
//   }
//   render() {
//     // le this d'ici dont on fait référence dans le callback
//     setTimeout(() => {
//       console.log(`Hello my name is ${this.name}`);
//     }, 1000);
//   }
// }

// const user = new User();
// user.render(); // this n'existe dans le callback


// class User {
//   constructor() {
//     this.name = 'Romain';
//   }
//   handleTimeout() {
//     console.log(`Hello my name is ${this.name}`);
//   }
//   render() {
//     // le this d'ici dont on fait référence dans le callback
//     setTimeout(this.handleTimeout.bind(this), 1000);
//   }
// }

// const user = new User();
// user.render(); // force la valeur de this

// class User {
//   constructor() {
//     this.name = 'Romain';
//   }
//   handleTimeout() {
//     console.log(`Hello my name is ${this.name}`);
//   }
//   render() {
//     // le this d'ici dont on fait référence dans le callback
//     setTimeout(() => this.handleTimeout(), 1000);
//   }
// }

// const user = new User();
// user.render(); // this est la valeur de render

class User {
  constructor() {
    this.name = 'Romain';
    this.handleTimeout = this.handleTimeout.bind(this);
  }
  handleTimeout() {
    console.log(`Hello my name is ${this.name}`);
  }
  render() {
    // le this d'ici dont on fait référence dans le callback
    setTimeout(this.handleTimeout, 1000);
  }
}

const user = new User();
user.render(); // this est la valeur du constructeur
// la création de la fonction "bindé" se dans le constructeur
// (1 fois par composant) plutôt que dans le render
// (plusieurs fois par composant)