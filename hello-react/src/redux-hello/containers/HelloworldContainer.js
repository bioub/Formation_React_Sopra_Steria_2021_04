import { useDispatch, useSelector } from "react-redux";

import Helloworld from "../components/Helloworld";

function HelloworldContainer() {
  const prenom = useSelector((state) => state.prenom);
  const dispatch = useDispatch();

  function handleNameChange(name) {
    dispatch({ type: "change_prenom", payload: name });
  }

  return <Helloworld name={prenom} onNameChange={handleNameChange} />;
}

export default HelloworldContainer;
