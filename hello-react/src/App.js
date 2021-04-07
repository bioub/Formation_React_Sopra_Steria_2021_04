import React from 'react';

import Clock from './Clock.js';
import Counter from './Counter.js';
import ExHelloWorld from './ExHelloWorld.js';
import ExMultiStateButton from './ExMultiStateButton.js';
import Hello from './Hello';

function App() {
  const prenom = 'Toto';

  return (
    <div className="App">
      <h2>Hello (Helloworld, JSX, Components and Props)</h2>
      <Hello prenom="Romain" />
      <Hello name="Romain" age={35} isTrainer />
      <Hello name={prenom} />
      <h2>Clock (State, Lifecycle)</h2>
      <Clock />
      <h2>Counter (Handling Events)</h2>
      <Counter />
      <Counter />
      <Counter />
      <h2>Exercices</h2>
      <ExHelloWorld />
      <ExMultiStateButton values={['Rouge', 'Orange', 'Bleu']} />
    </div>
  );
}

export default App;
