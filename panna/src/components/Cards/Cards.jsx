import React from "react";
import './Cards.css';


export function Card({text, image, imageDescription, buttonName, directedTo}){

    function handleChangePage() {
        
    }

    return(
        <div className="item">
         <img src={image} alt= {imageDescription} />
           <h3>{text}</h3> <br /> 
           <a href={directedTo}>
           <button onClick={handleChangePage}>{buttonName}</button>
           </a>
        </div>
    )
}