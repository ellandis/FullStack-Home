import { useEffect, useRef } from "react";
import Counter from "./components/Counter";


function App() {
  const inputEL = useRef(null);
  const handleSubmit = () =>{
    // const el = document.querySelector(".search");
    // console.log(el);
    inputEL.current.style.padding = '100px';
  }
  useEffect( () => {
    // handleSubmit();
    inputEL.current.focus();
  },[]);
  return (
    <div className='app'>
      <div>
        <form onSubmit={handleSubmit}>
        <input type='text' className='search' ref={inputEL} />
        <button>Click</button>
      </form>
      </div>
      
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
