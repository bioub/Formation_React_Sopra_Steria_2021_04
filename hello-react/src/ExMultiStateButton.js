import { Component } from "react";

class ExMultiStateButton extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const {} = this.state;
    const { values } = this.props;
    return (
      <button className="ExMultiStateButton">
        {/*
         * par défaut, afficher le premier élément de values
         * à chaque click du bouton, afficher la valeur suivante
         * s'il n'y a plus de valeur suivante, afficher la première
         * valeur du tableau values
         */}
      </button>
    );
  }
}

export default ExMultiStateButton;