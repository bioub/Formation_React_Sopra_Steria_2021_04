const nbs = [1, 2, 3, 4];

// const un = nbs[0];
// const deux = nbs[1];
// const trois = nbs[2];
// const quatre = nbs[3];

// ES2015 : destructurer un tableau
//    [1 , 2   , 3    , 4     ]
const [un, deux, trois, quatre] = nbs;

const props = {
  name: 'Romain',
  age: 35,
  isTrainer: true,
};

// const prenom = props.name;
// const age = props.age;
// const isTrainer = props.isTrainer;

// ES2015 : destructurer un objet

//       { name: 'Romain', age: 35 , isTrainer: true     }
// const { name: prenom  , age: age, isTrainer: isTrainer} = props;

// console.log(prenom, age, isTrainer);

// combinaison avec ES2015 : shorthand property
// const { name: prenom  , age, isTrainer} = props;
// console.log(prenom, age, isTrainer);

// combinaison avec ES2015 : default value
const { name: prenom = 'World'  , age = 0, isTrainer = false, username = 'toto'} = props;
console.log(prenom, age, isTrainer, username);