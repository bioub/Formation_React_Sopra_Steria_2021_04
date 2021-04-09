import classNames from "classnames";
import React, { Component, createRef } from "react";

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
  state = {
    opened: false,
  };
  hostRef = createRef();
  handleClick = () => {
    const { opened } = this.state;
    this.setState({
      opened: !opened,
    });
  };
  handleDocumentClick = (event) => {
    if (this.hostRef.current.contains(event.target)) {
      return;
    }
    
    this.setState({
      opened: false,
    });
  }
  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  }
  render() {
    const { opened } = this.state;
    const { values, selected, onSelect } = this.props;

    const itemsJsx = values.map((val) => {
      const className = classNames(styles.item, {
        [styles.active]: val === selected,
      });
      return (
        <div className={className} key={val} onClick={() => onSelect(val)}>
          {val}
        </div>
      );
    });

    return (
      <div className={styles.host} onClick={this.handleClick} ref={this.hostRef}>
        <div className={styles.selected}>{selected}</div>
        {opened && <div className={styles.items}>{itemsJsx}</div>}
      </div>
    );
  }
}

export default Select;
