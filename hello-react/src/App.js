import React from 'react';

import Clock from './Clock';
import Counter from './Counter';
import ExHelloWorld from './ExHelloWorld';
import ExMultiStateButton from './ExMultiStateButton';
import Hello from './Hello';
import ClockControls from './lifecycle/ClockControls';
import Select from './Select';

function App() {
  const prenom = 'Toto';

  // state = {
  //   colors: ['A', 'B', 'C']  
  // }

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
      <h2>Exercices</h2>
      <ExHelloWorld />
      <ExMultiStateButton values={['Rouge', 'Orange', 'Bleu']} />
      <h2>Select (Conditional Rendering, Lists and Keys)</h2>
      <Select values={['Rouge', 'Orange', 'Bleu']} />
      <h2>ClockControls (Composition, Lifecycle)</h2>
      <ClockControls />
    </div>
  );
}

export default App;
