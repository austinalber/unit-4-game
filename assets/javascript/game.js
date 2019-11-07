// --------------- Javascript  --------------- //

// Wait until the page is loaded to run
$(document).ready(function()  {

// Character Object
var characters= {
  "Obi-Wan Kenobi": {
      name: 'Obi-Wan Kenobi',
      health: 120,
      attack: 8,
      imageURL: "assets/images/obi-wan.jpg",
      counterAttack: 10
  },
  "Luke Skywalker": {
      name: 'Luke Skywalker',
      health: 100,
      attack: 6,
      imageURL: "assets/images/luke-skywalker.jpg",
      counterAttack: 5
  },

  "Darth Sidious": {
      name: 'Darth Sidious',
      health: 150,
      attack: 10,
      imageURL: "assets/images/darth-sidious.jpg",
      counterAttack: 20
  },

  "Darth Maul": {
      name: 'Darth Maul',
      health: 180,
      attack: 8,
      imageURL: "assets/images/darth-maul.jpg",
      counterAttack: 25
  },
}

// Global Variables
var attacker;
var enemies = [];
var defender;
var turnCounter = 1;
var killCount = 0;

// // Functions for Ease

// Attacking Phase
function attackCharacter(){

};

// Render Each Character
function renderCharacters(character, renderArea) {
  // This block of code builds the character card, and renders it to the page.
  var charDiv = $("<div class='character' data-name='" + character.name + "'>");
  var charName = $("<div class='character-name'>").text(character.name);
  var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageURL);
  var charHealth = $("<div class='character-health'>").text(character.health);
  charDiv.append(charName).append(charImage).append(charHealth);
  $(renderArea).append(charDiv);
};

// this function will load all the characters into the character section to be selected
var initializeGame = function() {
  // Loop through the characters object and call the renderCharacter function on each character to render their card.
  for (var key in characters) {
    renderCharacter(characters[key], "#characters-section");
  }
};



// Game Function
function runGame(){
  // Render Starting Images
  

  // Allow for Character Selection

  // Move User and Enemies to Divs

  // Allow for User to Select Enemy to Fight

  // Move the Character's to Fight Area

  // Fight 

  // Declare win or lose

  // Re-Render Characters
}

// Run Game
runGame();

}); // End of (document).ready
