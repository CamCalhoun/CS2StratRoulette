import { maps, buys, sides, strats } from '/csStrats.js'
function reroll() {
	const mapSelection = document.querySelector('input[name="maps"]:checked')
	const buySelection = document.querySelector('input[name="buys"]:checked')
	const sideSelection = document.querySelector('input[name="sides"]:checked')

	if (mapSelection == null || buySelection == null || sideSelection == null) {
		document.getElementById("displayStratTitle").innerText = "ERROR"
		document.getElementById("displayStratInfo").innerText = "Please make your selections."
	}
	else {
		document.getElementById("displayStratInfo").innerText = `Map: ${mapSelection.value} \nBuy: ${buySelection.value} \nSide: ${sideSelection.value}`
		//Declare values of selections as readable values
		const m = mapSelection.value
		const b = buySelection.value
		const s = sideSelection.value

		//Select lists of given selections, as well as any lists to fall back on
		//Then concatenate the lists to create a list of valid strats
		const specificStrats = strats[m][b][s]
		const anyStrats = strats["any"][b]["any"]
		const validStrats = specificStrats.concat(anyStrats)

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

function getRandomStrat(array) {
	if (array.length != 0) {
		const randomNum = Math.floor(Math.random() * array.length)
		return array[randomNum]
	}
}
/*
 * Dont allow reroll unless user has selected map, side, and buy.   DONE
 *
 * Based on users radio selections, reference the proper map.
 * i.e. if dust2 is selected, mapsIndex = 1, maps[1]
 *
 * map index = m, buy index = b, side index = s
 *
 * Use this to pull strats from their selections, as well as anys.
 *
 * const specificStrats = strats[maps[m]][buys[b]][sides[s]]
 * const anyStrats	  = strats[maps["any"][buys[b]][sides["any"]]
 * 
 * concat these two to form a list of all available strats
 *
 * const validStrats = specificStrats.concat(anyStrats)
 * 
 * call getRandomStrat with validStrats
 */
