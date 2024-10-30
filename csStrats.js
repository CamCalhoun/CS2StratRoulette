const maps = ["any", "Dust2", "Mirage", "Nuke", "Inferno", "Vertigo", "Ancient", "Anubis"]
const buys = ["any", "Eco", "Half", "Full"]
const sides = ["any", "CT", "T"]

const strats = {
	//Try and make strats as specific as possible. This will lead to better generation.
	"any": {
		"any": {
			"any": ["Follow The Leader~Top frag is now the leader. Do exactly as they do.",
				"Butter fingers~Upon getting a kill, you must drop your gun. You can pick it back up.",
				"Sorry, I don't know this map~All of your callouts must be wrong. Don't use actual callouts.",
				"Backseat Gamer~Once you die, backseat whoever the game makes you spectate until they die. Repeat until the round is over."],
			"CT": [],
			"T": ["Hot Potato~You must switch bomb carriers every ten seconds. If the bomb touches the floor, you cannot plant this round.",
				"The ol' Switcheroo~After taking a site, tap the bomb to fake a plant, then run back through the way you came to head to the other site."],
		},
		"Eco": {
			"any": ["A Real Eco~You can only buy one item this round. Make it count."],
			"CT": ["Title~StratDesc"],
			"T": ["The Classic~All 5 rush B. They can't get ALL of you, right?",
				"Crickets~Play the round as you choose, but anytime you are not shooting, or ACTIVELY seen by an enemy, you must spam rightclick with your glock.",
				"A Real Eco~You can only buy one item this round. Make it count."],
		},
		"Half": {
			"any": ["A more literal half-buy~Pool your funds together. Fully equip two of your players, leave one with a half buy, and two get the scraps."],
			"CT": ["Title~StratDesc"],
			"T": ["Title~StratDesc"],
		},
		"Full": {
			"any": ["One man's trash~Buy your least favorite weapon equipped, give it to a friend."],
			"CT": ["Title-StratDesc"],
			"T": ["Title-StratDesc"],
		},

	},
	"Dust2": {
		"any": {
			"any": [],
			"CT": [],
			"T": ["A leisurely stroll~Long -> A-site -> Cat -> Tunnels -> Plant B"],
		},
		"Eco": {
			"any": ["Title~StratDesc"],
			"CT": ["Firing Bunker~All 5 players go car on A. 3 sit on top of the car, staring at the roof, and the other two shoot between their legs with their pistols.",
				"The Hotline~Run to the spot that usually holds doors with an AWP. All 5 chuck HE's at them. If you score a kill, emotionally encourage him in all chat.",
				"The Tower~All 5 B. Fit as many players on top of the boost next to car as possible. Lie in wait."],
			"T": ["Overwhelming Presence~Buy 5 decoys, and throw them all over long doors. Four of you make your way back to B, while one remains in long with his overwhelming presence."],
		},
		"Half": {
			"any": ["Title~StratDesc"],
			"CT": ["Title~StratDesc"],
			"T": ["Title~StratDesc"],
		},
		"Full": {
			"any": ["Title~StratDesc"],
			"CT": ["Title~StratDesc"],
			"T": ["The Fnatic Special~Buy as many awps as you can afford. Everyone peak mid doors."],
		},

	},
	"Mirage": {
		"any": {
			"any": [],
			"CT": [],
			"T": ["A leisurely stroll~Appts -> Underpass -> Connector -> Jungle -> Market -> Plant B"],
		},
		"Eco": {
			"any": ["Title~StratDesc"],
			"CT": ["Title~StratDesc"],
			"T": ["Title~StratDesc"],
		},
		"Half": {
			"any": ["Title~StratDesc"],
			"CT": ["Title~StratDesc"],
			"T": ["Title~StratDesc"],
		},
		"Full": {
			"any": ["Title~StratDesc"],
			"CT": ["Title~StratDesc"],
			"T": ["Title~StratDesc"],
		},

	},
	"Nuke": {
		"any": {
			"any": [],
			"CT": [],
			"T": [],
		},
		"Eco": {
			"any": ["Title~StratDesc"],
			"CT": ["Title~StratDesc"],
			"T": ["Title~StratDesc"],
		},
		"Half": {
			"any": ["Title~StratDesc"],
			"CT": ["Title~StratDesc"],
			"T": ["Title~StratDesc"],
		},
		"Full": {
			"any": ["Title~StratDesc"],
			"CT": ["Title~StratDesc"],
			"T": ["Title~StratDesc"],
		},

	},
	"Inferno": {
		"any": {
			"any": [],
			"CT": [],
			"T": [],
		},
		"Eco": {
			"any": ["Title~StratDesc"],
			"CT": ["Title~StratDesc"],
			"T": ["Title~StratDesc"],
		},
		"Half": {
			"any": ["Title~StratDesc"],
			"CT": ["Title~StratDesc"],
			"T": ["Title~StratDesc"],
		},
		"Full": {
			"any": ["Title~StratDesc"],
			"CT": ["Title~StratDesc"],
			"T": ["Title~StratDesc"],
		},
	},
	"Vertigo": {
		"any": {
			"any": [],
			"CT": [],
			"T": [],
		},
		"Eco": {
			"any": ["Title~StratDesc"],
			"CT": ["Title~StratDesc"],
			"T": ["Title~StratDesc"],
		},
		"Half": {
			"any": ["Title~StratDesc"],
			"CT": ["Title~StratDesc"],
			"T": ["Title~StratDesc"],
		},
		"Full": {
			"any": ["Title~StratDesc"],
			"CT": ["Title~StratDesc"],
			"T": ["Title~StratDesc"],
		},
	},
	"Ancient": {
		"any": {
			"any": [],
			"CT": [],
			"T": [],
		},
		"Eco": {
			"any": ["Title~StratDesc"],
			"CT": ["Title~StratDesc"],
			"T": ["Title~StratDesc"],
		},
		"Half": {
			"any": ["Title~StratDesc"],
			"CT": ["Title~StratDesc"],
			"T": ["Title~StratDesc"],
		},
		"Full": {
			"any": ["Title~StratDesc"],
			"CT": ["Title~StratDesc"],
			"T": ["Title~StratDesc"],
		},
	},
	"Anubis": {
		"any": {
			"any": [],
			"CT": [],
			"T": [],
		},
		"Eco": {
			"any": ["Title~StratDesc"],
			"CT": ["Title~StratDesc"],
			"T": ["Title~StratDesc"],
		},
		"Half": {
			"any": ["Title~StratDesc"],
			"CT": ["Title~StratDesc"],
			"T": ["Title~StratDesc"],
		},
		"Full": {
			"any": ["Title~StratDesc"],
			"CT": ["Title~StratDesc"],
			"T": ["Title~StratDesc"],
		},
	},

}
export { strats };
