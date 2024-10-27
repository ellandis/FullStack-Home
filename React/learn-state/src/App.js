import "./index.css";

const messages = ["Hello React", "Hello Aria", "OOO Hello Bria"]
export default function App() {
  const [first, setfirst] = useState(second)

  const handlePre = () => {
    alert("Previous");

  };
  const handleNext = () => {
    alert("Next");
  };

  return (
    <div className="wrapper">
      <div className="numberWrapper">
        <div className={`${step >= 0 ? "active" : ""}`}>1</div>
        <div className={`${step >= 1 ? "active" : ""}`}>2</div>
        <div className={`${step >= 2 ? "active" : ""}`}>3</div>
      </div>
      <p>{step}:{messages[step]}</p>
      <div className="btnGroup">
        <button onClick={()=>handlePre()}>Previous</button>
        <button onClick={()=>handleNext()}>Next</button>
      </div>
    </div>
  );
}
