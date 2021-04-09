import Parent from "../lifting-state-up/Parent";

function LiftingStateUp({ match }) {
  const name = match.params.name;
  
  return (
    <div className="LiftingStateUp">
      <h2>Parent (Lifting State Up)</h2>
      <p>Hello {name}</p>
      <Parent />
    </div>
  );
}

export default LiftingStateUp;