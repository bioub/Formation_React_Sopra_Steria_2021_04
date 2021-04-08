class User {
  #name = 'Romain';
  handleTimeout = () => {
    console.log(`Hello my name is ${this.#name}`);
  }
  render() {
    // le this d'ici dont on fait référence dans le callback
    setTimeout(this.handleTimeout, 1000);
  }
}


const user = new User();
user.render();