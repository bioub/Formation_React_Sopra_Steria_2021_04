function Helloworld({name, onNameChange}) {
  return (
    <div className="HelloWorld">
      <div>
        Prénom : <input value={name} onChange={(e) => onNameChange(e.target.value)} />
      </div>
      <p>Bonjour {name}</p>
    </div>
  );
}

export default Helloworld;