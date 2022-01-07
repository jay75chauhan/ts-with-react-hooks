import UseContext from "./components/UseContext";
import { UseEffect } from "./components/UseEffect";
import { UseState } from "./components/UseState";
import { UseRef } from "./components/UseRef";
import { UseCustomHook } from "./components/UseCustomHook";
import { UseReducer } from "./components/UseReducercompo";
import MoreComponents from "./components/MoreComponents";

function App() {
  return (
    <div>
      {/* <h1>UseCustomHook</h1>
      <UseCustomHook /> */}

      <h1>UseRef</h1>
      <UseRef />
      <h1>useState</h1>
      <UseState />

      <h1>UseEffect</h1>
      <UseEffect />

      <h1>UseContext</h1>
      <UseContext />

      <h1>useReducer</h1>
      <UseReducer />

      <MoreComponents />
    </div>
  );
}

export default App;
