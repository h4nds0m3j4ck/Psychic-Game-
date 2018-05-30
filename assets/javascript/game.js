//Prompt the user to pick one of the variable letters in the array 
var letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// Wins, losses, guesses so far counter
var wins = 0;
var losses = 0;
var guessSoFar = []; // Array for user inputs
var guessLeft = 7; // 7 tries to guess the letter

// This function is used when the user inputs a character 
document.onkeyup = function(event){

    // Determines what key was pressed 
    var userGuess = event.key;
    // Generate a random letter and store it as a variable 
    var compGuess = letters[Math.floor(Math.random() * letters.length)];
    guessSoFar.push(userGuess); // Place user guess into array
    if (userGuess == randomLetter){
        wins++;
        alert("Hmm... you actually got it? You're a psychic! You win!");
        
    }
}
    // Prompt user to guess a letter A-Z//
    var numGuess = 7;
    var guess = prompt("Pick a letter between A -Z. What's your guess?");
    
    var guessCount = 0;
    var correctGuess = false;

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