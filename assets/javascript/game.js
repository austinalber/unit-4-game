// Character Variables
// Values are subject to change
var charArray = [   
    {name: "Obi-Wan Kenobi", HP: 120, AP: 6, CAP: 6},
    {name: "Luke Skywalker", HP: 100, AP: 6, CAP: 6},
    {name: "Darth Sideous", HP: 150, AP: 6, CAP: 6},
    {name: "Darth Maul", HP: 180, AP: 6, CAP: 6}];
//User's Character
var userChar = [];

console.log(charArray[0].name) // Returns "Obi-Wan Kenobi"


// User Character Selection
    // Selects the First Character as the User's: Obi-Wan Kenobi
    function char1() {
        userChar = [{name: "Obi-Wan Kenobi", HP: 120, AP: 6, CAP: 6}];
    }

    //Selects the Second Character as the User's: Luke Skywalker
    function char2() {
        userChar = [{name: "Luke Skywalker", HP: 100, AP: 6, CAP: 6}];
    }

    //Selects the Third Character as the User's: Darth Sidious
    function char3() {
        userChar = [{name: "Darth Sideous", HP: 150, AP: 6, CAP: 6}];
    }

    //Selects the Fourth Character as the User's: Darth Maul
    function char4() {
        userChar = [{name: "Darth Maul", HP: 180, AP: 6, CAP: 6}];
    }

// Assigns Character Chosen to 'Your Character Tab' & All others to 'Enemies Availaible to Attack'
console.log(userChar)