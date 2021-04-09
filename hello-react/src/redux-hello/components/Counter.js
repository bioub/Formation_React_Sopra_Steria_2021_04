// Composant Controllé
// Le parent peut controller sa valeur (réutilisable et qui peut
// échanger avec d'autres)
function Counter({ count, onIncrement }) {
  return (
    <button className="Counter" onClick={() => onIncrement(count + 1)}>
      {count}
    </button>
  );
}

export default Counter;
