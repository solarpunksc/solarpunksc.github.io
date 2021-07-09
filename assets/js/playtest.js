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
			}
		]
	}
};