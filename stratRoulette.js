import { strats } from './csStrats.js'
function reroll() {
	const mapSelection = document.querySelector('input[name="maps"]:checked')
	const buySelection = document.querySelector('input[name="buys"]:checked')
	const sideSelection = document.querySelector('input[name="sides"]:checked')

	if (mapSelection == null || buySelection == null || sideSelection == null) {
		document.getElementById("displayStratTitle").innerText = "ERROR"
		document.getElementById("displayStratInfo").innerText = "Please make your selections."
	}
	else {
		const validStrats = selectValidStrats(mapSelection.value, buySelection.value, sideSelection.value)
		//Pick a random strat of the validStrats
		//Split it by its delimiter ~ and display the title and description
		const chosenStratString = getRandomStrat(validStrats)
		const chosenStrat = chosenStratString.split("~")
		document.getElementById("displayStratTitle").innerText = chosenStrat[0]
		document.getElementById("displayStratInfo").innerText = chosenStrat[1]
		console.log(`Map: ${mapSelection.value} Buy: ${buySelection.value} Side: ${sideSelection.value}`)
	}

}

window.reroll = reroll

function selectValidStrats(m, b, s) {
	//Select lists of given selections, as well as any lists to fall back on
	//Then concatenate the lists to create a list of valid strats
	var specificStrats = strats[m][b][s]							//Strats with SPECIFIED map, buy, side
	specificStrats = specificStrats.concat(strats[m][b]["any"])		//Strats with SPECIFIED map, buy, ANY side
	specificStrats = specificStrats.concat(strats[m]["any"][s])		//Strats with SPECIFIED map, side, ANY buy
	specificStrats = specificStrats.concat(strats[m]["any"]["any"])	//Strats with SPECIFIED map, ANY buy, side
	console.log(specificStrats)
	var anyStrats = strats["any"][b][s]								//Strats with ANY map, SPECIFIED buy, side
	anyStrats = anyStrats.concat(strats["any"][b]["any"])			//Strats with ANY map, side, SPECIFIED buy
	anyStrats = anyStrats.concat(strats["any"]["any"][s])			//Strats with ANY map, buy, SPECIFIED side
	anyStrats = anyStrats.concat(strats["any"]["any"]["any"])		//Strats with ANY map, buy, side
	console.log(anyStrats)
	const validStrats = specificStrats.concat(anyStrats)
	return validStrats
}

function getRandomStrat(array) {
	if (array.length != 0) {
		const randomNum = Math.floor(Math.random() * array.length)
		return array[randomNum]
	}
}
