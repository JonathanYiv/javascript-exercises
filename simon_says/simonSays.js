function echo(text) {
	return text;
}

function shout(text) {
	return text.toUpperCase();
}

function repeat(text, number = 2) {
	let repetition = text;
	while(number > 1) {
		repetition = repetition + ' ' + text;
		number--;
	}
	return repetition;
}

function pieceOfWord(text, number) {
	return text.slice(0, number);
}

function firstWord(text) {
	return text.split(" ")[0];
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
	// This function just capitalizes the word given to it, use in conjunction with titleCreator
}

function titleCreator(title) {
	return capitalize(title.split(" ").map(word => {
		if(!["and", "over", "the"].includes(word)) {
			return capitalize(word);
		} else {
			return word;
		}
	}).join(" "));
}

module.exports = {
	echo,
	shout,
	repeat,
	pieceOfWord,
	firstWord,
	titleCreator
}
