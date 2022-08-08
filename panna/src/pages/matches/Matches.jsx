import React from "react";
import './Matches.css'
import TopBar from '../../components/Top Bar/TopBar'

function Matches () {


 fetch("https://v3.football.api-sports.io/timezone", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "e13ec9776b700e46468154973ba4c968"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });

    
 fetch("https://v3.football.api-sports.io/fixtures?live=all", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "e13ec9776b700e46468154973ba4c968"
	}
})

.then(response => console.log (response))

.then(result => result)

.catch(err => {
	console.log(err);
});






    return(
        <div className="Matches">
            <TopBar />

    <div className="fixtures"
     data-host="v3.football.api-sports.io"
     data-date=""
     data-league=""
     data-season=""
     data-theme=""
     data-refresh="15"
     data-show-toolbar="true"
     data-show-errors="false"
     data-show-logos="true"
     data-modal-game="true"
     data-modal-standings="true"
     data-modal-show-logos="true">
</div>


        </div>
    )
}

export default Matches