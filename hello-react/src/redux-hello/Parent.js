import CounterContainer from "./containers/CounterContainer";
import HelloContainer from "./containers/HelloContainer";
import HelloworldContainer from "./containers/HelloworldContainer";

function Parent() {
  return (
    <div className="Parent">
      <HelloContainer />
      <HelloContainer />
      <CounterContainer />
      <CounterContainer />
      <CounterContainer />
      <HelloworldContainer />
      <HelloworldContainer />
    </div>
  );
}

export default Parent;
