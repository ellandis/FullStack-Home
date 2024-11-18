import { useState } from "react";
import Effect from "./Effect";


function App() {
const [show, setShow] = useState(true);

  return (
    <div className="app">
      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
      {show && <Effect/>}
    </div>
  );
}

export default App;
