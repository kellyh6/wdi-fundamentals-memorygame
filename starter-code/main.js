console.log("JS file is connected to HTML! Woo!");

var cards = ["queen", "queen", "king", "king"];

// if("queen" === "queen" && "king"==="king"){
// 	window.alert("You found a match!");
// }
// else{
// 	window.alert("Sorry, try again!");
// }
// Get an element with the id of game-board and set it to a variable

var gameBoard = document.getElementById('game-board');

var cardsInPlay = [];

// create a for loop that creates an HTML element for each card. 

var createCards = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
	    cardElement.className = 'card';
	    gameBoard.appendChild(cardElement);
	    cardElement.setAttribute('data-card', cards[i]); 
		cardElement.addEventListener('click', isTwoCards);
	}
};

var isTwoCards = function () {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(cardsInPlay);

	if(this.getAttribute('data-card') === 'queen') { 
		this.innerHTML = '<img src="queen.png" alt="Queen of Hearts" class="card-image" />';

	} else if(this.getAttribute('data-card') === 'king') {
        this.innerHTML = '<img src="king.png" alt="King of Spades" class="card-image"/>';
	}

    if (cardsInPlay.length === 2) {
    	isMatch(cardsInPlay);
    	cardsInPlay = [];
    }	
};

var isMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]){
  	alert ("You found a match");
  } else {
  	alert("Not a match");
  }
}


createCards();