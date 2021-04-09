import { connect, useSelector } from 'react-redux';

import Hello from "../components/Hello";

// avec les hooks (react-redux v4+)
// function HelloContainer() {
//   const prenom = useSelector((state) => state.prenom);
//   const age = useSelector((state) => state.age);

//   return (
//     <Hello name={prenom} age={age} />
//   );
// }

// avec la fonction connect (react-redux v1+)
function mapStateToProps(state) {
  return {
    name: state.prenom,
    age: state.age,
  };
}

const createContainer = connect(mapStateToProps)

const HelloContainer = createContainer(Hello);

export default HelloContainer;

