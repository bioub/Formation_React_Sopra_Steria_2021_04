import { Component } from 'react';

// class Counter extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };

//     // pour rendre "this" accessible dans handleClick
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(event) {
//     // console.log('Coords x/y', event.clientX, event.clientY);
//     console.log(event.currentTarget);
//     console.log(event.target);

//     const { count } = this.state;
//     this.setState({
//       count: count + 1,
//     });
//   }
//   render() {
//     const { count } = this.state;

//     // rootEl.addEventListener('click', (event) => {
//     //    event
//     //    this.setState(...
//     // });

//     return (
//       <button className="Counter" onClick={this.handleClick}>
//         {count}
//       </button>
//     );
//   }
// }

// Composant Non-Controllé
// ses valeurs sont internes, moins réutilisable
// beaucoup plus compliqué d'échanger avec d'autres composants
class Counter extends Component {
  state = {
    count: 0,
  };
  handleClick = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  }
  render() {
    const { count } = this.state;
    return (
      <button className="Counter" onClick={this.handleClick}>
        {count}
      </button>
    );
  }
}

export default Counter;