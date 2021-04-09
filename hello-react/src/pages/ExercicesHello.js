import ExHelloWorld from "../ExHelloWorld";
import ExMultiStateButton from "../ExMultiStateButton";

function ExercicesHello() {
  return (
    <div className="ExercicesHello">
      <h2>Exercices (Props, Events, State)</h2>
      <ExHelloWorld />
      <ExMultiStateButton values={['Rouge', 'Orange', 'Bleu']} />
    </div>
  );
}

export default ExercicesHello;