window.onload = function() {
    
	$('.button').click(function() {
		var cardType = $(this).attr("card");
		var thisCard = {"drawn":true};
		var thisDeck = Cards[cardType];

		do{
			if(thisDeck.cardsDrawn >= thisDeck.cards.length){
				alert("There are no more cards in this deck. /b If you would like to contribute ideas for more cards, fill out the feedback form linked at the top!");
				break;
			}
			var drawNumber = Math.round(Math.random() * (thisDeck.cards.length-1));
			thisCard = thisDeck.cards[drawNumber];
		}
		while(thisCard.drawn);

		thisCard.drawn = true;
		thisDeck.cardsDrawn ++;
      	
      	if(thisCard.hasOwnProperty('name')){$("."+cardType).append("<h2>"+thisCard.name+"</h2>");}
    });
    
};

Cards = {
	"personae":{
		"cardsDrawn":0,
		"description":"",
		"cards":[
			{
				"name":"Builder",
				"drawn":false
			},
			{
				"name":"Coordinator",
				"drawn":false
			},
			{
				"name":"Elder",
				"drawn":false
			},
			{
				"name":"Engineer",
				"drawn":false
			},
			{
				"name":"Grower",
				"drawn":false
			},
			{
				"name":"Hacker",
				"drawn":false
			},
			{
				"name":"Teacher",
				"drawn":false
			}
		]
	},
	"challenge":{
		"cardsDrawn":0,
		"description":"",
		"cards":[
			{
				"name":"Ableist Infrastructure",
				"drawn":false
			},
			{
				"name":"Borders",
				"drawn":false
			},
			{
				"name":"Climate Refugees",
				"drawn":false
			},
			{
				"name":"Deforestation",
				"drawn":false
			},
			{
				"name":"Digital Divide",
				"drawn":false
			},
			{
				"name":"Homelessness",
				"drawn":false
			},
			{
				"name":"Hunger",
				"drawn":false
			},
			{
				"name":"Landfills",
				"drawn":false
			},
			{
				"name":"Mass Incarceration",
				"drawn":false
			},
			{
				"name":"Mass Surveilance",
				"drawn":false
			},
			{
				"name":"Medical Debt",
				"drawn":false
			},
			{
				"name":"Nuclear Weapons",
				"drawn":false
			},
			{
				"name":"Police Violence",
				"drawn":false
			},
			{
				"name":"Political Apathy",
				"drawn":false
			},
			{
				"name":"Refugees",
				"drawn":false
			},
			{
				"name":"Unaffordable Healthcare",
				"drawn":false
			},
			{
				"name":"Violence Against Women",
				"drawn":false
			}
		]
	},
	"value":{
		"cardsDrawn":0,
		"description":"",
		"cards":[
			{
				"name":"Beauty",
				"drawn":false
			},
			{
				"name":"Biomimicry",
				"drawn":false
			},
			{
				"name":"Care",
				"drawn":false
			},
			{
				"name":"Communality",
				"drawn":false
			},
			{
				"name":"Consent",
				"drawn":false
			},
			{
				"name":"Cooperation",
				"drawn":false
			},
			{
				"name":"Ecology",
				"drawn":false
			},
			{
				"name":"Eros",
				"drawn":false
			},
			{
				"name":"Freedom",
				"drawn":false
			},
			{
				"name":"Generativity",
				"drawn":false
			},
			{
				"name":"Ingenuity",
				"drawn":false
			},
			{
				"name":"Interdependence",
				"drawn":false
			},
			{
				"name":"The Irreducible Minimum",
				"drawn":false
			},
			{
				"name":"Joy",
				"drawn":false
			},
			{
				"name":"Paidia",
				"drawn":false
			},
			{
				"name":"Parrhesia",
				"drawn":false
			},
			{
				"name":"Pura Vida",
				"drawn":false
			},
			{
				"name":"Responsibility",
				"drawn":false
			},
			{
				"name":"Self-determination",
				"drawn":false
			},
			{
				"name":"Solidarity",
				"drawn":false
			},
			{
				"name":"Truth",
				"drawn":false
			},
			{
				"name":"Usufruct",
				"drawn":false
			}
		]
	},
	"tool":{
		"cardsDrawn":0,
		"description":"",
		"cards":[
			{
				"name":"AI",
				"drawn":false
			},
			{
				"name":"Broadcasts",
				"drawn":false
			},
			{
				"name":"Civic Banks",
				"drawn":false
			},
			{
				"name":"Clothing Design",
				"drawn":false
			},
			{
				"name":"Community Land Rights",
				"drawn":false
			},
			{
				"name":"Cooperatives",
				"drawn":false
			},
			{
				"name":"Direct Action",
				"drawn":false
			},
			{
				"name":"Direct Democracy",
				"drawn":false
			},
			{
				"name":"Electoral Campaigns",
				"drawn":false
			},
			{
				"name":"Equipment Library",
				"drawn":false
			},
			{
				"name":"Family Traditions/Wisdom",
				"drawn":false
			},
			{
				"name":"Flora/Fauna Identification",
				"drawn":false
			},
			{
				"name":"General Strike",
				"drawn":false
			},
			{
				"name":"Graffiti",
				"drawn":false
			},
			{
				"name":"Healing Arts",
				"drawn":false
			},
			{
				"name":"Journalism",
				"drawn":false
			},
			{
				"name":"Laboratory",
				"drawn":false
			},
			{
				"name":"Library",
				"drawn":false
			},
			{
				"name":"Mass Protest",
				"drawn":false
			},
			{
				"name":"Memes",
				"drawn":false
			},
			{
				"name":"Off-grid Energy",
				"drawn":false
			},
			{
				"name":"Participatory Budgeting",
				"drawn":false
			},
			{
				"name":"Performance",
				"drawn":false
			},
			{
				"name":"Permaculture",
				"drawn":false
			},
			{
				"name":"Photography",
				"drawn":false
			},
			{
				"name":"Pirate Radio",
				"drawn":false
			},
			{
				"name":"Public Transportation",
				"drawn":false
			},
			{
				"name":"Recycled Materials",
				"drawn":false
			},
			{
				"name":"Reparations",
				"drawn":false
			},
			{
				"name":"Satire",
				"drawn":false
			},
			{
				"name":"Teaching/Education",
				"drawn":false
			},
			{
				"name":"Timebank",
				"drawn":false
			},
			{
				"name":"Unions",
				"drawn":false
			},
			{
				"name":"Vertical Farms",
				"drawn":false
			},
			{
				"name":"Visionary Fiction",
				"drawn":false
			}
		]
	}
};