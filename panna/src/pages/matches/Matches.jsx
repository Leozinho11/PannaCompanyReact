import React, {useEffect, useState} from "react";
import './Matches.css';
import TopBar from '../../components/Top Bar/TopBar';
import { Card } from '../../components/Cards/Cards'


function Matches () {

    const [results, setResults] = useState([]);

useEffect (() => {
   
    fetch("https://v3.football.api-sports.io/fixtures?live=all", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "e13ec9776b700e46468154973ba4c968"
        }
    })
    .then((response) =>  response.json())
    .then(
        (result) => {
            console.log(result.response[0])
        }
    )
    .catch(err => {
        console.log(err);
    });
}, [])

    


    return(
        <div className="Matches">
           
            <TopBar />
            <div className="fixtures">
                <strong>{results.response}</strong>
            </div>
            
        </div>
    )
}

export default Matches