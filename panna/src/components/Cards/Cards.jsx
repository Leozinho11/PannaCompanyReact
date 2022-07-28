import React, {useState} from "react";
import './Cards.css';
import { Button } from '../Button/Button'

export function Card({text, image, imageDescription, button}){

    const [buttonName, setButtonName] = useState({Button});

    function handleCardButton(){
        const newButton = {
            name: buttonName
        }

        setButtonName(prevState => [...prevState, newButton])
    }

    return(
        <div className="contentboxes">
        <div className="item">
         <img src={image} alt= {imageDescription} />
           <h3>{text}</h3> 
           <button>{handleCardButton}</button>
        </div>
        </div>
    )
}