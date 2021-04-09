import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import ExercicesHello from "./pages/ExercicesHello";
import ExercicesRedux from "./pages/ExercicesRedux";
import ExercicesTodos from "./pages/ExercicesTodos";
import Home from "./pages/Home";
import LiftingStateUp from "./pages/LiftingStateUp";
import Redux from "./pages/Redux";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/ex-hello">Exercices Hello</Link>{" "}
          <Link to="/ex-todos">Exercices Todos</Link>{" "}
          <Link to="/lifting-state-up/Toto">Lifting State Up</Link>{" "}
          <Link to="/redux">Redux</Link>{" "}
          <Link to="/ex-redux">Exercices Todos Redux</Link>
        </nav>
        <Switch>
          <Route path="/lifting-state-up/:name" component={LiftingStateUp} />
          <Route path="/ex-hello" component={ExercicesHello} />
          <Route path="/ex-todos" component={ExercicesTodos} />
          <Route path="/redux" component={Redux} />
          <Route path="/ex-redux" component={ExercicesRedux} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
