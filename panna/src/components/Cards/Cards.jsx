import React from "react";
import './Cards.css';

import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'


export function Card({text, image, imageDescription, buttonName, directedTo = ''}){


    return(
        <div className="card">
         <img src={image} alt= {imageDescription} />
           <h3>{text}</h3> <br />
           <Link to= {directedTo}>
            <Button name={buttonName} />
           </Link>
        </div>
    )
}