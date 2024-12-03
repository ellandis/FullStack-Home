import "./Detail.css";
import { useLocation } from "react-router-dom";
import food from "../../assets/food.jpg";
import meal from "../../assets/meal.jpg";
import React from "react";

const Detail = () => {
  const { state } = useLocation();

  console.log(state);

  return (
    <div className="detailWrapper">
      <div className="imgWrapper">
        <h1>{state.label}</h1>
        <img src={food} alt="detail" />
      </div>
      <div className="bottomWrapper">
        <div className="nutWrapper">
        <h4>NUTRIENTS</h4>
        <p>{state.totalNutrients.ENERC_KCAL.label}: {""}
        {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}</p>
        <p>Calories: {Math.round(state.calories)}</p>
        {state.digest.slice(0,4).map((item,index) =>(
          <p key={index}>
            {item.label} : {Math.round(item.total)}
          </p>
        ))}
      </div>
      <div className="mealImage">
        <img  src={meal} alt="meal" />
      </div>
      <div className="ingWrapper">
        <h4>INGREDIENTS</h4>
        {state.ingredientLines.map((ingredient,index) => (
          <div> 
            <p>{index + 1}-{ingredient}</p>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default Detail;
