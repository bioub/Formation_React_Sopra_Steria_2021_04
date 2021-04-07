import { Component } from "react";

class ExHelloWorld extends Component {
  constructor() {
    super();
    this.state = {
      prenom: '',
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event) {
    this.setState({
      prenom: event.target.value,
    });
  }
  render() {
    const { prenom } = this.state;
    return (
      <div className="ExHelloWorld">
        <div>
          Prénom : <input onChange={this.handleInput} />
        </div>
        <p>Bonjour {prenom}</p>
      </div>
    );
  }
}

export default ExHelloWorld;