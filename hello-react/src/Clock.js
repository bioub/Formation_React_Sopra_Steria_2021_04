import { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      contact: {
        name: 'Romain'
      },
      now: new Date(),
    };
    setInterval(() => {
      // Do not mutate state directly
      // this.state.now = new Date();

      // Object.assign -> assignState
      this.setState({
        now: new Date()
      });
    }, 1000);
  }
  render() {
    const { now, contact } = this.state;
    const { format } = this.props;
    
    return (
      <div className="Clock">
        {contact.name}
        {now.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;