function Hello({ name = 'World', age = 0 }) {
  return (
    <div className="Hello" title="Hello !!" lang="fr-FR">
      Hello my name is <b>{name}</b>, I'm {age}.
    </div>
  );
}

export default Hello;