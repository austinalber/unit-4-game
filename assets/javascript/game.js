// --------------- Javascript  --------------- //

// Wait until the page is loaded to run
$(document).ready(function()  {

  // Character Object
  const characters= {
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
  let attacker;
  let enemies = [];
  let defender;
  let turnCounter = 1;
  let killCount = 0;

  // Render Each Character
  const renderCharacters = (character, renderArea) => {
    // This block of code builds the character card, and renders it to the page.
    const charDiv = $("<div class='character' data-name='" + character.name + "'>");
    const charName = $("<div class='character-name'>").text(character.name);
    const charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageURL);
    const charHealth = $("<div class='character-health'>").text(character.health);
    charDiv.append(charName).append(charImage).append(charHealth);
    $(renderArea).append(charDiv);
  };

  // this function will load all the characters into the character section to be selected
  const initializeGame = () => {
    // Loop through the characters object and call the renderCharacter function on each character to render their card.
    for (let key in characters) {
      renderCharacters(characters[key], "#character-selection");
    }
  };

  // Render all characters to the page
  initializeGame();

  // Update characters location or status on selection
  const updateCharacter = (characterObject, renderArea) => {
    $(renderArea).empty();
    renderCharacters(characterObject, renderArea);
  };

  // Render all enemies
  const renderEnemies = (enemyArray) => {
    for(let i = 0; i < enemyArray.length; i++) {
      renderCharacters(enemyArray[i], "#enemy-div");
    }
  };

  // Render message on game status change
  const renderMessage = message => {
    let gameMessage = $("#message");
    let newMessage = $("<div>").text(message);
    gameMessage.append(newMessage);
  };

  // Resart Game button
  const restartGame = resultMessage => {
    let restart = $("<button>Restart</button>").click(function() {
      location.reload();
    });

    let gameState = $("<div>").text(resultMessage);

    $("body").append(gameState);
    $("body").append(restart);
  };

  // Clear game messages
  const clearMessage = () => {
    let gameMessage = $("#message");

    gameMessage.text("");
  };

  // Select character click event
  $("#character-selection").on("click", ".character", function() {
    let name = $(this).attr("data-name");

    if(!attacker) {
      attacker = characters[name];
      
      for (let key in characters) {
        if (key !== name) {
          enemies.push(characters[key]);
        }
      }

      $("#character-selection").hide();

      updateCharacter(attacker, "#user-div");
      renderEnemies(enemies);
    }
  });

  $("#enemy-div").on("click", ".character", function() {
    let name = $(this).attr("data-name");

    if($("#defender-location").children().length === 0) {
      defender = characters[name];
      updateCharacter(defender, "#defender-location");

      $(this).remove();
      clearMessage();
    }
  });

  $("#attack-button").on("click", function() {
    // If there is a defender, combat will occur.
    if ($("#defender-div").children().length !== 0) {
      // Creates messages for our attack and our opponents counter attack.
      var attackMessage = "You attacked " + defender.name + " for " + attacker.attack * turnCounter + " damage.";
      var counterAttackMessage = defender.name + " attacked you back for " + defender.counterAttack + " damage.";
      clearMessage();

      // Reduce defender's health by your attack value.
      defender.health -= attacker.attack * turnCounter;

      // If the enemy still has health..
      if (defender.health > 0) {
        // Render the enemy's updated character card.
        updateCharacter(defender, "#defender-location");

        // Render the combat messages.
        renderMessage(attackMessage);
        renderMessage(counterAttackMessage);

        // Reduce your health by the opponent's attack value.
        attacker.health -= defender.counterAttack;

        // Render the player's updated character card.
        updateCharacter(attacker, "#user-div");

        // If you have less than zero health the game ends.
        // We call the restartGame function to allow the user to restart the game and play again.
        if (attacker.health <= 0) {
          clearMessage();
          restartGame("You have been defeated...GAME OVER!!!");
          $("#attack-button").off("click");
        }
      }
      else {
        // If the enemy has less than zero health they are defeated.
        // Remove your opponent's character card.
        $("#defender-location").empty();

        var gameStateMessage = "You have defeated " + defender.name + ", you can choose to fight another enemy.";
        renderMessage(gameStateMessage);

        // Increment your kill count.
        killCount++;

        // If you have killed all of your opponents you win.
        // Call the restartGame function to allow the user to restart the game and play again.
        if (killCount >= enemies.length) {
          clearMessage();
          $("#attack-button").off("click");
          restartGame("You Won!!!! GAME OVER!!!");
        }
      }
      // Increment turn counter. This is used for determining how much damage the player does.
      turnCounter++;
    }
    else {
      // If there is no defender, render an error message.
      clearMessage();
      renderMessage("No enemy here.");
    }
  });

}); // End of (document).ready
