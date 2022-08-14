import React from "react";
import './Background.css';


function Background ({position, teamLogo, teamLogoDescription, teamName, points, goalDifference, matchesPlayed, wins, draws, defeats}){
    
    return(
        <div>
         <table className="table">

<thead>
    <tr>
        <td><b></b></td>
        <td><b>Time</b></td>
        <td><b>Pontos</b></td>
        <td><b>SG</b></td>
        <td><b>PJ</b></td>
        <td><b>V</b></td>
        <td><b>E</b></td>
        <td><b>D</b></td>

    </tr>
</thead> 

<tbody>
                <tr>
                    <td>{position}</td>
                    <td><img src={teamLogo} alt={teamLogoDescription} /> {teamName}</td>
                    <td>{points}</td>
                    <td>{goalDifference}</td>
                    <td>{matchesPlayed}</td>
                    <td>{wins}</td>
                    <td>{draws}</td>
                    <td>{defeats}</td>
                </tr>
</tbody>

</table>
        </div>
    )
}

export default Background