import React from "react";
import TopBar from '../../../components/Top Bar/TopBar';
import Background from '../../../components/Tables Background/Background';


function Brasileirao() {

    fetch("https://v3.football.api-sports.io/standings?league=71&season=2022", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "e13ec9776b700e46468154973ba4c968"
	}
})
.then(response => 
	response.json()
)
.then(result => {
    console.log(result.response[0].league.standings[0])
})
.catch(err => {
	console.log(err);
});


    return(

        <div className="Brasileirão">
            <TopBar />
            <Background />


        </div>
    )
}

export default Brasileirao