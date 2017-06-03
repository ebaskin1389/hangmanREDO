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
document.getElementById("fruitName").innerHTML = "Fruit name:  " + placeholder;
console.log(placeholder);

