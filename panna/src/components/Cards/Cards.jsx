import React from "react";
import './Cards.css';


export function Card({text, image, imageDescription, buttonName}){


    return(
        <div className="contentboxes">
        <div className="item">
         <img src={image} alt= {imageDescription} />
           <h3>{text}</h3> <br /> 
           <button>{buttonName}</button>
        </div>
        </div>
    )
}