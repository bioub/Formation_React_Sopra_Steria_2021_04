import { connect } from "react-redux";

import Counter from '../components/Counter';

function mapStateToProps(state) {
  return {
    count: state.age,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement() {
      dispatch({type: 'increment'});
    }
  }
}

const createContainer = connect(mapStateToProps, mapDispatchToProps)

const CounterContainer = createContainer(Counter);

export default CounterContainer;