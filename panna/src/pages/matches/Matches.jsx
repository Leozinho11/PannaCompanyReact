import React from "react";
import TopBar from '../../components/Top Bar/TopBar'

function Matches () {

  
  fetch('https://api.football-data.org/v4/matches')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))

    return(
        <div className="Matches">
            <TopBar />
        </div>
    )
}

export default Matches