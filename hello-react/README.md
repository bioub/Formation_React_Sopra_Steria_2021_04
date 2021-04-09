## Le state

Le state devra avoir cette forme là

```
{
  age: 35,
  prenom: 'Romain',
  todos: {
    newTodo: 'Achet',
    items: [{
      id: 1,
      title: 'Acheter du pain',
      completed: false,
    }, {
      id: 2,
      title: 'Aller au sport',
      completed: true,
    }, {
      id: 3,
      title: 'Utiliser Redux',
      completed: false,
    }],
  }
}
```

## Ecrire le reducer todosReducer se basant sur les actions ADD_TODO, CHANGE_TODO

Créer un nouveau reducer `todosReducer` et l'enregistrer avec combineReducer avec les autres (`ageReducer` et `prenomReducer`)

Il y aura 2 actions à traiter dans ce reducer :

- `CHANGE_TODO` utilisé quand on saisi dans le champs
- `ADD_TODO` utilisé au submit du formulaire

Traiter `CHANGE_TODO`. L'action `CHANGE_TODO` ressemblera à :

```
{
  type: 'CHANGE_TODO',
  payload: 'Fruits'
}
```

Elle devra mettre à jour la clé `newTodo` du state en préservant les autres clés.

Traiter ADD_TODO. L'action ADD_TODO ressemblera à :

```
{
  type: 'ADD_TODO',
  payload: {
    id: 123,
    title: 'Fruits',
    completed: false,
  }
}
```

Elle devra ajouter le payload au tableau `todos` du state tout en préservant les autres clés. (2 niveau d'immuabilité à traiter ex : `{...state, [...state.todos, {id: Math.random()}]})`

L'id peut être généré avec `Math.random()`

Avec l'extension Redux Devtools, tester via le bouton dispatch que le reducer fonctionne

## Ecrire les versions connectées des composants TodoForm et TodoList

Avec `connect` ou `useSelector` + `useDispatch` créer `TodoFormContainer` et `TodoListContainer` et remplacer `TodoForm` et `TodoList` dans `Todos`

## Optionnel (TODO_DELETE)

A vous de créer les bonnes actions, case du reducer...