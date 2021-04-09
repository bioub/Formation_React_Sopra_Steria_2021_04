import { Component } from 'react';

import Counter from './Counter';
import Hello from './Hello';
import Helloworld from './Helloworld';

class Parent extends Component {
  state = {
    prenom: 'Romain',
    age: 35,
  }
  handleIncrement = (newAge) => {
    this.setState({
      age: newAge,
    });
  }
  handleNameChange = (name) => {
    this.setState({
      prenom: name,
    });
  }
  render() {
    const { prenom, age } = this.state;
    return (
      <div className="Parent">
        <Hello name={prenom} age={age} />
        <Hello name={prenom} age={age} />
        <Counter count={age} onIncrement={this.handleIncrement} />
        <Counter count={age} onIncrement={this.handleIncrement} />
        <Counter count={age} onIncrement={this.handleIncrement} />
        <Helloworld name={prenom} onNameChange={this.handleNameChange} />
        <Helloworld name={prenom} onNameChange={this.handleNameChange} />
      </div>
    );
  }
}

export default Parent;