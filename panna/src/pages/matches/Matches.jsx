import React, {useEffect, useState} from "react";
import './Matches.css'
import TopBar from '../../components/Top Bar/TopBar'


function Matches () {

    const [results, setResults] = useState({fixtures: []});

    fetch("https://v3.football.api-sports.io/fixtures?live=all", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "e13ec9776b700e46468154973ba4c968"
        }
    })
    .then(response => response.json())
    .then(result => console.log (result))

    .catch(err => {
        console.log(err);
    });

    


    return(
        <div className="Matches">
           
            <TopBar />

            
        </div>
    )
}

export default Matches