import { Component } from "react";

import Clock from "./Clock";

class ClockControls extends Component {
  state = {
    showClock: true,
    delay: 1000,
  };
  handleToggleShowClock = () => {
    const { showClock } = this.state;
    this.setState({
      showClock: !showClock,
    });
  };
  handleDelayChange = (event) => {
    this.setState({
      delay: Number(event.target.value),
    });
  };
  render() {
    const { showClock, delay } = this.state;
    return (
      <div className="ClockControls">
        <div className="controls">
          Active :{" "}
          <input
            type="checkbox"
            checked={showClock}
            onChange={this.handleToggleShowClock}
          />
          Delay : <input type="number" value={delay} onChange={this.handleDelayChange} />
        </div>
        {showClock && <Clock delay={delay} />}
      </div>
    );
  }
}

export default ClockControls;
