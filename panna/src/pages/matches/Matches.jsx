import React, {useEffect, useState} from "react";
import './Matches.css'
import TopBar from '../../components/Top Bar/TopBar'


function Matches () {

    const [results, setResults] = useState({fixtures: []});

useEffect(() => { 
    
    async function fetchData(){
  const response = await fetch("https://v3.football.api-sports.io/fixtures?live=all", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "e13ec9776b700e46468154973ba4c968"
	}
})
  const data = await response.json();
     setResults({
        fixtures: data.response
     })



}

fetchData();

},[])
    







    return(
        <div className="Matches">
            <TopBar />
            {results.map(result => <div>{result.response}</div> )}

        </div>
    )
}

export default Matches