import React from "react";
import './Cards.css';
<<<<<<< Updated upstream
=======
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'
>>>>>>> Stashed changes


export function Card({text, image, imageDescription, buttonName, directedTo}){

    function handleChangePage() {
        
    }

    return(
        <div className="card">
         <img src={image} alt= {imageDescription} />
<<<<<<< Updated upstream
           <h3>{text}</h3> <br /> 
           <a href={directedTo}>
           <button onClick={handleChangePage}>{buttonName}</button>
           </a>
=======
           <h3>{text}</h3> <br />
           <Link to= {directTo}>
            <Button name={buttonName} />
           </Link>
>>>>>>> Stashed changes
        </div>
    )
}