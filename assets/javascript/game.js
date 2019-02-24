// var for letters that are allowed to be selected

var userGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


// var for what the guesses could be 

var fruits = [
    "apple",
    "orange",
    "grape",
    "strawberry",
    "tangerine",
    "watermelon",
    "rasberries",
    "pomegranate",
    "pineapple",
    "peaches",
    "mango",
    "banana"
]


// var for counting the wins
var wins = 0;

// var for counting losses
var losses = 0;

// var for counting letters guessed
var guesses = 0;

// var for the current word the user is trying to guess
var computerChoice = fruits[Math.floor(Math.random() * fruits.length)]
console.log(computerChoice)

// var for how many guesses are remaining
var guesses_left = 10;


// we want the event to start once a letter is pressed thus the onkeyup tag
// document.onkeyup = function(event) {
    
//     //selects a random element (fruit) from the list
    
//     var blank = [];
//     for (var i = 0; i < computerChoice; i++){
//         blank [i] = "_"
//     }

//     var userGuess = event.key;

//     if(userGuesses === "abcdefghijklmnopqrstuvwxyz".split("")){
//         if(userGuesses === computerChoice){
            
//         }
//     }

//     var lettersLeft = fruits.length;
    
//     for (var i = 0; j < fruits.length; i++){
//         if (fruits[i] === userGuesses){
//             blank[i] = userGuesses;
//             lettersLeft--;
//         }
//     }



// }

// https://nostarch.com/download/JS4K_ch7.pdf