import classNames from 'classnames';
import React, { Component } from "react";

import styles from "./Select.module.scss";

// class Select extends Component {
//   constructor({ values }) {
//     super();
//     this.state = {
//       selected: values[0],
//       opened: false,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     const { opened } = this.state;
//     this.setState({
//       opened: !opened,
//     });
//   }
//   render() {
//     const { selected, opened } = this.state;
//     const { values } = this.props;

//     let itemsElement;

//     const itemsJsx = values.map((val) => <div className="item" key={val}>{val}</div>);

//     if (opened) {
//       itemsElement = (
//         <div className="items">
//           {itemsJsx}
//         </div>
//       );
//     }

//     return (
//       <div className="Select" onClick={this.handleClick}>
//         <div className="selected">{selected}</div>
//         {itemsElement}
//       </div>
//     );
//   }
// }

class Select extends Component {
  constructor({ values }) {
    super();
    this.state = {
      selected: values[0],
      opened: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { opened } = this.state;
    this.setState({
      opened: !opened,
    });
  }
  render() {
    const { selected, opened } = this.state;
    const { values } = this.props;

    return (
      <div className={styles.host} onClick={this.handleClick}>
        <div className={styles.selected}>{selected}</div>
        {opened && (
          <div className={styles.items}>
            {values.map((val) => (
              <div className={classNames(styles.item, {[styles.active]: val === selected})} key={val}>{val}</div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Select;
