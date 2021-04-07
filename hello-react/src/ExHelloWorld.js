import { Component } from "react";

class ExHelloWorld extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const {} = this.state;
    return (
      <div className="ExHelloWorld">
        <div>
          Prénom : <input />
          {/*
           * écouter l'événement input et mettre à jour le state avec
           * le contenu de la balise input (propriété value d'un HTMLInputElement)
           */}
        </div>
        <p>Bonjour {/* afficher en temps réel le prénom saisi */}</p>
      </div>
    );
  }
}

export default ExHelloWorld;