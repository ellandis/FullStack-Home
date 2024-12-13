import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({user}) =>{
    const {avatar,email,first_name,last_name,id} = user;
    const navigate = useNavigate();
    // const userDetailNavigate=()=>{
    //     navigate(`/user/${id}`);
    // }

    return (
        <div onClick={()=> navigate(`/user/${id}`)} className="cardWrapper">
            <h3>{first_name} {last_name}</h3>
            <img src={avatar} alt="avatar" />
            <p>{email}</p>
            
        </div>
    )
}

export default Card;