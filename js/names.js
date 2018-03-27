
var	meaning = $('#nameDisplay');
var syncIcon = $('.icon-sync');

var speed = 300;


function genName() {
	var randomM = Math.floor(Math.random() * (mArray.length));
	var randomW = Math.floor(Math.random() * (wArray.length));

	meaning.fadeOut(100, function() {
		$(this).text(mArray[randomM] + " " + wArray[randomW]);
	}).fadeIn(100);
}



function runningName() {
	genName();
	setInterval(genName, 1000);
}


function setName() {
	var randomM = Math.floor(Math.random() * (mArray.length));
	var randomW = Math.floor(Math.random() * (wArray.length));

	$('.generatedNameBox').fadeOut(speed, function() {
		$(this).text(mArray[randomM] + " " + wArray[randomW]);
	}).fadeIn(speed);

	// $('.generatedNameBox').text(mArray[randomM] + " " + wArray[randomW]);	
}



var msf = $('#msf');
var msfWraper = $('.name-gen-wrapper');
var setM = $('#msfM');
var setW = $('#msfW');

msfWraper.on('click', function() {
	generatingName();
});

$('#msf').on('click', function() {
	generatingName();
});

function generatingName() {
	var randomM = Math.floor(Math.random() * (mArray.length));
	var randomW = Math.floor(Math.random() * (wArray.length));

	msf.fadeOut(speed, function() {
		$(this).text(mArray[randomM] + " " + wArray[randomW]);
	}).fadeIn(speed);

}

function generateSeperate() {
	var randomM = Math.floor(Math.random() * (mArray.length));
	var randomW = Math.floor(Math.random() * (wArray.length));

	meaning.fadeOut(speed, function() {
		$(this).text(mArray[randomM] + " " + wArray[randomW]);
	}).fadeIn(speed);

}

meaning.on('click', function() {
	generateSeperate();
});


var mArray = [
'Mad',
'Major',
'Machete',
'Machine',
'Mechanical',
'Mashed',
'Matured',
'Maimed',
'Massive',
'Manual',
'Macabre',
'Majestic',
'Magical',
'Masked',
'Malformed',
'Manga',
'Martian',
'Mandarin',
'Malfunctioned',
'Malnourished',
'Macadamian',
'Marvel',
'Maximum',
'Mc',
'Merciful',
'Meaningless',
'Merciless',
'Mercedes',
'Megaton',
'Metallic',
'Metal',
'Melting',
'Meowing',
'Merman',
'Merry',
'Mexican',
'Millennial',
'Milky',
'Mister',
'Misty',
'Miscreated',
'Mixed',
'Mixable',
'Mocking',
'Muffled',
'Miming',
'Mapped',
'Monstrous',
'Mischief',
'Missing',
'Midnight',
'Midwived',
'Midweek',
'Migraine',
'Migrating',
'Minimised',
'Minimal',
'Minority',
'Miracle',
'Motard',
'Modular',
'Mutton',
'Mongolian',
'Moonshine',
'Moleskine',
'More',
'Mobile',
'Mount',
'Monthly',
'Morning',
'Moving',
'Mostly',
'Moonlit',
'Multiple',
'Mutant',
'Muscular',
'Murling',
'Muskily',
'Murderous',
'Mustard',
'Mutated',
'Mutual',
'Micro',
'Mutinous',
'Mummified',
'Musical',
'Myographic',
'Mythical',
'Mystic',
'Mysophobic',
'Mechanically-Enhanced'
]

var wArray = [
'Waco',
'Wader',
'Wafer',
'Waesuck',
'Waffle',
'Warhead',
'Warhorse',
'Wank',
'Waist',
'Waitor',
'Warrior',
'Wager',
'Wafflestomper',
'Warehouse',
'Warning',
'Wax',
'Waltz',
'Warmth',
'Wedding',
'Washable',
'Watcher',
'Weapon',
'Weakling',
'Weed',
'Weekender',
'Welcoming',
'Wearable',
'Weephole',
'Weewee',
'Wetland',
'Weighbridge',
'Weirdo',
'West',
'Western',
'Wishbone',
'Wine',
'Wildling',
'Wilderbeest',
'Whale',
'Wheeze',
'Whimper',
'Whiplash',
'Whip',
'Whistle',
'Whistleblower',
'Withdrawal',
'Whiskey',
'Whiskers',
'Wheel',
'Wholesaler',
'Windscreen',
'Winker',
'Winterkill',
'Wizard',
'Wichcraft',
'Witness',
'Wit',
'Wife',
'Wifu',
'Wing',
'Wiper',
'Wipe',
'Wish',
'Wise',
'Woe',
'Words',
'Wolf',
'Wolverine',
'Wombat',
'Wonderland',
'Woodblock',
'Woodworm',
'Workaround',
'Worker',
'Worshiper',
'Wookie',
'Wonderer',
'Wonderlust',
'Wurst',
'Wraith',
'Wrap',
'Wrapper',
'Wrinkle',
'Wrath',
'Wound',
'Writer',
'Wrist',
'Worth',
'Watermelon',
'Waterbender',
'Wrench',
'Wrestler',
'War-Angel'
]