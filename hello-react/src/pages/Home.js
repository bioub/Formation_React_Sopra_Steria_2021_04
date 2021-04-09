import { useState } from "react";

import Clock from "../Clock";
import Counter from "../Counter";
import Hello from "../Hello";
import ClockControls from "../lifecycle/ClockControls";
import Select from "../Select";
import UserForm from "../UserForm";

function Home() {
  const [prenom, setPrenom] = useState('Toto');
  const [prenoms] = useState(['Toto', 'Titi', 'Tata']);

  return (
    <div className="Home">
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
      <h2>Select (Conditional Rendering, Lists and Keys)</h2>
      <Select values={prenoms} selected={prenom} onSelect={setPrenom} />
      <h2>ClockControls (Composition, Lifecycle)</h2>
      <ClockControls />
      <h2>UserForm (Forms)</h2>
      <UserForm />
    </div>
  );
}

export default Home;