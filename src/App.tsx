import UseContext from "./components/UseContext";
import { UseEffect } from "./components/UseEffect";
import { UseState } from "./components/UseState";

function App() {
  return (
    <div>
      <h1>useState</h1>
      <UseState />

      <h1>UseEffect</h1>
      <UseEffect />

      <h1>UseContext</h1>
      <UseContext />
    </div>
  );
}

export default App;
