//Prompt the user to pick one of the variable letters in the array 
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// Wins, losses, guesses so far counter
var wins = 0;
var losses = 0;
var guessSoFar = []; // Array for user inputs
var guessLeft = 7; // 7 tries to guess the letter

// This function is used when the user inputs a character 
document.onkeyup = function(event){

    // Determines what key was pressed 
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // Generate a random letter and store it as a variable 
    var compGuess = letters[Math.floor(Math.random() * letters.length)];
    guessSoFar.push(userGuess); // Place user guess into array
    if (userGuess == randomLetter){
        wins++;
        alert("Hmm... you actually got it? You're a psychic! You win!");
        guessLeft = 7; // Resets guess counter
        guessSoFar.length = 0; // Resets letters chosen in array
    }
    else if (guessLeft == 0){
        losses++;
        alert('Aww, you didn\'t get it... too bad! Wanna try again?!');
        guessLeft = 7;
        guessSoFar.length = 0;
    }
    else if (userGuess !== compGuess){
        guessesLeft--; //decrementing the guesses left
    }  


    // Showing data via HTML
    var html = "<h1>The Psychic Game</h1>" + 
        "<p>Can you guess what letter I'm thinking of?! ;)</p>" +
        "<p> Wins: " + 
        wins + 
        "</p>" +
        "<p>Losses: " + 
        losses + 
        "</p>" +
        "<p>Guesses Left: " + 
        guessLeft + 
        "</p>" +
        "<p>Your Guesses so far: " +
        guessSoFar +
        "</p>"
        ;
        // Placing the html into the game ID
        document.querySelector('#game').innerHTML = html;
}  











    // Prompt user to guess a letter A-Z//
    //var numGuess = 7;
   // var guess = prompt("Pick a letter between A -Z. What's your guess?");
    
    //var guessCount = 0;
    //var correctGuess = false;

// Check to see if the guess was correct //

// If the letter selected is wrong, prompt the user to try again and choose another letter. Repeat until the correct answer is chosen or user exhausted the attempts. //

//If user chose the correct letter, display confirmation text // 

// Loop //
//for (i = 0; i < letters.length; i++ ){
    //console.log("Letters " + letters[i]);
//}

// HTML //
//var html = 
  //  "<p>You chose " + userGuess + "<"