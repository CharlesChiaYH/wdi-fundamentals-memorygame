console.log("Up and running!");
var cards = [

{
	rank: "Queen",
	suit: "Hearts",
	cardImage: "images/queen-of-hearts.png"
},
{	
	rank: "Queen",
	suit: "Diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "King",
	suit: "Hearts",
	cardImage: "images/king-of-hearts.png"
},
{	
	rank: "King",
	suit: "Diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];
var checkForMatch = function(){
 if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }
};

var flipCard = function(){

var cardId = document.getElementById(game-board).this.getAttribute('data-id');
//console.log("User flipped " + cards[cardId].rank);


checkForMatch();

//console.log(cards[cardId].cardImage);
//console.log(cards[cardId].suit);

//console.log("whats in Cards in Play array" + " " + cardsInPlay);
//console.log("How many Cards in Play array" + " " + cardsInPlay.length);

document.getElementById(game-board).setAttribute('src',cards[i].cardImage);

if(cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
	alert("You found matching Cards");	
}else alert("Sorry, no matching cards");
};

var createBoard = function(){
	for (var i = 0; i < cards.length; i++){
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', "images/images/back.png");
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();



