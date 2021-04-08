import { Component } from 'react';

class Clock extends Component {
  state = {
    now: new Date(),
  };

  componentDidMount() {
    // addEventListener
    // new WebSocket
    // new Worker
    this._interval = setInterval(() => {
      this.setState({
        now: new Date()
      });
    }, this.props.delay);
  }

  componentDidUpdate(previousProps) {
    if (previousProps.delay === this.props.delay) {
      return;
    }

    clearInterval(this._interval);
    this._interval = setInterval(() => {
      this.setState({
        now: new Date()
      });
    }, this.props.delay);
  }
  
  componentWillUnmount() {
    // removeEventListener
    // ws.close();
    // worker.terminate()
    clearInterval(this._interval);
  }

  render() {
    const { now } = this.state;
    return (
      <div className="Clock">
        {now.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;