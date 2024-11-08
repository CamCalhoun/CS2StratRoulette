const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let m, b, s

// Pull data from json, convert to object
let rawData = fs.readFileSync('strats.json', 'utf8')
let strats = JSON.parse(rawData)

// Add strats thru logic here
console.log('WELCOME TO STRAT-ROULETTE UTILITY PROGRAM')
console.log('What map is your strat for?')
console.log('---------------------------')
console.log('1 Any' +
	'2. Dust2\n' +
	'3. Mirage\n' +
	'4. Nuke\n' +
	'5. Inferno\n' +
	'6. Vertigo\n' +
	'7. Ancient\n' +
	'8. Anubis\n')
rl.question('Enter number of selection, Q TO QUIT', (map) => {
	m = map
	if (map.toUpperCase() === 'Q') {
		console.log('Exiting Program....')
		rl.close()
		return
	}
	console.log(m + '\n')
	console.log('What buy type does your strat work for?')
	console.log('---------------------------------------')
	console.log('1. Any\n' +
		'2. Eco\n' +
		'3. Half\n' +
		'4. Full\n')

	rl.question('Enter number of selection, Q TO QUIT', (buy) => {
		b = buy
		console.log(b + '\n')

		// Convert back to JSON and save
		let updatedData = JSON.stringify(strats, null, 2)

		if (updatedData !== rawData) {
			fs.writeFileSync('strats.json', updatedData)
			console.log('Changes have been saved')
		} else {
			console.log('No changes to be made')
		}

		rl.close()
	})
})
