import React from "react";
import './Button.css'


export function FirstButton( {name} ) {

    return(
        <div>
            <button><span>{ name }</span></button>
        </div>
    )
}