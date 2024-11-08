const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

const maps = ["any", "Dust2", "Mirage", "Nuke", "Inferno", "Vertigo", "Ancient", "Anubis"]
const buys = ["any", "Eco", "Half", "Full"]
const sides = ["any", "CT", "T"]

let m, b, s, title, desc

// Pull data from json, convert to object
let rawData = fs.readFileSync('strats.json', 'utf8')
let strats = JSON.parse(rawData)

getMapChoice()

// Add strats thru logic here
function getMapChoice() {
	console.log('WELCOME TO STRAT-ROULETTE UTILITY PROGRAM')
	console.log('What map is your strat for?')
	console.log('---------------------------')
	console.log('1. Any\n' +
		'2. Dust2\n' +
		'3. Mirage\n' +
		'4. Nuke\n' +
		'5. Inferno\n' +
		'6. Vertigo\n' +
		'7. Ancient\n' +
		'8. Anubis\n')
	rl.question('Enter number of selection, Q TO QUIT\n', (map) => {
		if (quit(map)) return

		if (!isValidMap(map)) {
			console.log('Invalid choice, Please enter a valid selection')
			return getMapChoice()
		}

		m = maps[map - 1]
		console.log(m + '\n')
		getBuyChoice();
	})
}
function getBuyChoice() {
	console.log('What buy type does your strat work for?')
	console.log('---------------------------------------')
	console.log('1. Any\n' +
		'2. Eco\n' +
		'3. Half\n' +
		'4. Full\n')
	rl.question('Enter number of selection, Q TO QUIT\n', (buy) => {
		if (quit(buy)) return

		if (!isValidBuy(buy)) {
			console.log('Invalid choice, Please enter a valid selection')
			return getBuyChoice()
		}

		b = buys[buy - 1]
		console.log(b + '\n')

		getSideChoice()
	})
}
function getSideChoice() {
	console.log('What side is your strat for?')
	console.log('----------------------------')
	console.log('1. Any\n' +
		'2. CT\n' +
		'3. T\n')
	rl.question('Enter number of selection, Q to QUIT\n', (side) => {
		if (quit(side)) return

		if (!isValidSide(side)) {
			console.log('Invalid choice, Please enter a valid selection')
			return getSideChoice()
		}
		s = sides[side - 1]
		console.log(s + '\n')

		getStratInfo()
	})
}

function getStratInfo() {
	console.log('What is the title of your strat?')
	console.log('--------------------------------')
	rl.question('Enter strat title, Q to QUIT\n', (titleChoice) => {
		if (quit(titleChoice)) return
		title = titleChoice
		console.log(title)
		console.log('What is the description of your strat?')
		console.log('--------------------------------------')
		rl.question('Enter strat description, Q to QUIT\n', (description) => {
			if (quit(description)) return
			desc = description
			console.log(desc)

			updateData()
		})

	})
}

function updateData() {
	newStrat = title.concat("~").concat(desc)
	console.log(newStrat)
	// Convert back to JSON and save
	console.log(strats[m][b][s])
	strats[m][b][s].push(newStrat)
	let updatedData = JSON.stringify(strats, null, 2)

	if (updatedData !== rawData) {
		fs.writeFileSync('strats.json', updatedData)
		console.log('Changes have been saved')
	} else {
		console.log('No changes to be made')
	}

	rl.close()
}
function quit(input) {
	let quitFlag = false
	if (input.toUpperCase() === 'Q') {
		console.log('No changes to be made')
		rl.close()
		quitFlag = true
	}
	return quitFlag
}

function isValidMap(map) {
	return map >= 1 && map <= 8 && !isNaN(map)
}
function isValidBuy(buy) {
	return buy >= 1 && buy <= 4 && !isNaN(buy)
}
function isValidSide(side) {
	return side >= 1 && side <= 3 && !isNaN(side)
}

