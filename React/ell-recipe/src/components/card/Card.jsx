import "./Card.css";
import defaultImage from "../../assets/noFood.png";
import {useNavigate} from "react-router-dom";

const Card = ({recipes}) => {
  const navigate =useNavigate();
  return (
    <div className="card">
      {recipes.map(({recipe},index)=>{
        const {label} = recipe;
        return (
          <div className="cardWrapper" key={index}>
            <h1>{label}</h1>
            <img src={defaultImage} alt="food" />
            <button onClick={()=>navigate("detail",{state:recipe})}>More Detail</button>
          </div>
        );
        })}
    </div>
  );
}

export default Card;
