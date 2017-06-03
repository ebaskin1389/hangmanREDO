//<script type="text/javascript">
// Hangman game to guess the word

//Words available
var tropicalArray = ["mango", "sapodilla", "starfruit", "banana", "lychee", "longan", "mangosteen", "guava", "avocado", "jackfruit", "jaboticaba", "dates"];


// New game button
var score = 0;
var userLetter = [];



// Choose random word from tropicalArray
var randomWord = tropicalArray[Math.floor(Math.random() * tropicalArray.length)]

console.log(randomWord);

// how many letter in picked word
var numOfLetters = (randomWord.length);
console.log(numOfLetters);

// _ for each letter
var letter = "_ ";
var placeholder = letter.repeat(numOfLetters);
document.getElementById("letters").innerHTML = "Fruit name:  " + placeholder;
console.log(placeholder);


//capture letter from keyboard, make var userLetter
document.addEventListener("keypress", function(userLetter) {
    console.log(String.fromCharCode(userLetter.charCode));


    document.getElementById("letter").innerHTML = (String.fromCharCode(userLetter.charCode));
})

//if userLetter mateches with a letter from random word do
if (n === -1) {
    document.getElementById("fruitName").innerHTML = (String.fromCharCode(userLetter.charCode));

} else {
    //if userLetter does not match letters from random word do
    document.getElementById("letter").innerHTML = (String.fromCharCode(userLetter.charCode));
}


// hint
hint.onclick = function hint() {
    var hintLetter = randomWord[Math.floor(Math.random() * randomWord.length)]
    document.getElementById("hintLetter").innerHTML = hintLetter;
    console.log(hint);
}


//<button onclick="randomWord()">New word</button>
var randomWord = tropicalArray[Math.floor(Math.random() * tropicalArray.length)]

console.log(randomWord);


// Function that updates the score...
function updateScore() {
    document.querySelector("score").innerHTML = "Score: " + score;
}
