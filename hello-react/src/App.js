import React, { useState } from 'react';

import Clock from './Clock';
import Counter from './Counter';
import ExHelloWorld from './ExHelloWorld';
import ExMultiStateButton from './ExMultiStateButton';
import Hello from './Hello';
import ClockControls from './lifecycle/ClockControls';
import Parent from './lifting-state-up/Parent';
import Select from './Select';
import Todos from './todos/Todos';
import UserForm from './UserForm';

function App() {
  const [prenom, setPrenom] = useState('Toto');
  const [prenoms, setPrenoms] = useState(['Toto', 'Titi', 'Tata']);

  return (
    <div className="App">
      <h2>Hello (Helloworld, JSX, Components and Props)</h2>
      <Hello prenom="Romain" />
      {/* React.createElement(Hello, { name:'Romain', age:35, isTrainer:true }) */}
      <Hello name="Romain" age={35} isTrainer />
      <Hello name={prenom} />
      <h2>Clock (State)</h2>
      <Clock />
      <h2>Counter (Handling Events)</h2>
      <Counter />
      <Counter />
      <Counter />
      <h2>Exercices (Props, Events, State)</h2>
      <ExHelloWorld />
      <ExMultiStateButton values={['Rouge', 'Orange', 'Bleu']} />
      <h2>Select (Conditional Rendering, Lists and Keys)</h2>
      <Select values={prenoms} selected={prenom} onSelect={setPrenom} />
      <h2>ClockControls (Composition, Lifecycle)</h2>
      <ClockControls />
      <h2>UserForm (Forms)</h2>
      <UserForm />
      <h2>Parent (Lifting State Up)</h2>
      <Parent />
      <h2>Exercice Todos (Lifting State Up)</h2>
      <Todos />
    </div>
  );
}

export default App;
