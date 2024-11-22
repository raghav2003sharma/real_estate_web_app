import React from "react";
function Card(props){
    return(
        <div className="card">
            <div className="img"><img src={props.img} alt=""/></div>
            <div className="details">
            <p>{props.details}</p>
            <h4>{props.location}</h4>
            <h4>{props.price}</h4>
            </div>
            
        </div>
    )

}
export default Card;