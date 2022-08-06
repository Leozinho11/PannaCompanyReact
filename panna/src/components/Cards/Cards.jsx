import React from "react";
import './Cards.css';
import { Link, Outlet, } from 'react-router-dom'


export function Card({text, image, imageDescription, buttonName, directTo = ''}){


    return(
        <div className="item">
         <img src={image} alt= {imageDescription} />
           <h3>{text}</h3> <br />
           <Link to= {directTo}>
           <button type="Button">{buttonName}</button> 
           </Link>
        </div>
    )
}