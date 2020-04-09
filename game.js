var wordsArray = ["boek", "spel", "auto", "veer", "boot", "raar", "vaag", "baan", "rood", "hond", "bijl", "pijl", "lijp", "dood", "pool", "acht", "vier", "tien", "twee", "drie", "vijf", "pees", "poes", "hoed", "dier", "weer", "meer", "heer", "leer", "neer", "teer", "accu", "alle", "anti", "arts", "balk", "boos", "blog", "blij", "blad", "boom", "feit", "foto", "fout", "ruig", "rook", "rits", "rijp", "ruik", "wiel", "warm", "woon", "woud", "wurg", "wolf", "wolk", "maan", "naam", "haar", "laan", ];
var imageArray = ["Hangman/hangman0.png", "Hangman/hangman1.png", "Hangman/hangman2.png", "Hangman/hangman3.png", "Hangman/hangman4.png", "Hangman/hangman5.png", "Hangman/hangman6.png", "Hangman/hangman7.png", "Hangman/hangman8.png", "Hangman/hangman9.png"];
var underscores = [l1, l2, l3, l4];
var wrongLetters = [];

var images = document.getElementById("hangman");
var guessedLetter = document.getElementById("textInput");
var getRandomWord = function(wordsArray) {return wordsArray[(Math.random() * wordsArray.length)|0];}
var randomWord = getRandomWord(wordsArray);

function spanChecker() {
	for (var i = 0; i < underscores.length; i++) {
		// checks if all spans are changed and shows "win" text
		if (underscores[0].textContent !== "_" && 
			underscores[1].textContent !== "_" && 
			underscores[2].textContent !== "_" && 
			underscores[3].textContent !== "_") {
				winText.classList.remove("winConfirm");
				// disabled text input if win
				guessedLetter.disabled = true;
			}
		// checks attempts, disabled text input and shows "lose" text
		if (wrongLetters.length === 9) {
			guessedLetter.disabled = true;
			winText.classList.remove("winConfirm");
			winText.textContent = "Jammer, niet geraden! " + "Het woord was " + randomWord + ".";
		}
	}
};

function randomWordLetters() {
	// check if input is "wrong" and if it's already in array
	if (randomWord.indexOf(guessedLetter.value) === -1 && 
		wrongLetters.indexOf(guessedLetter.value) === -1) {
		wrongLetters.push(guessedLetter.value);
		// prints wrong letter array on screen
		document.getElementById("guessedArray").innerHTML = "Gebruikte letters: " + "<br>" + wrongLetters.join(", ");
	}
	//prints word in letters
	for (var i = 0; i < randomWord.length; i++) {
		// compares input with letters in randomWord and changes underscore to letter
		if (guessedLetter.value === randomWord[i]) {
			underscores[i].textContent = randomWord[i];
		}
	}
	//changes hangman img and clears text input field
	hangman.src = imageArray[wrongLetters.length];
	guessedLetter.value = "";
	spanChecker();
};

// reset button
resetButton.addEventListener("click", function() {
	location.reload();
});