function translate(text) {
	return text.split(" ").map(word => {
    const letters = word.split("");
    if (isVowel(letters[0])) {
      letters.push("a", "y");
    } else {
      while(isConsonant(letters[0]) || letters[0] === "u") {
        letters.push(letters.shift());
      }
      letters.push("a", "y");
    }
    return letters.join("");
  }).join(" ");
}

function isVowel(character) {
  return !!character.match(/[aeiouAEIOU]/);
}

function isConsonant(character) {
  return !isVowel(character);
}


module.exports = {
	translate
}

// Rule 1: If a word begins with a vowel sound, add an "ay" sound to the end of the word.

// Rule 2: If a word begins with a consonant sound, move it to the end of the word,
// and then add an "ay" sound to the end of the word.

// (There are a few more rules for edge cases, and there are regional variants too,
// but that should be enough to understand the tests.)

// See https://en.wikipedia.org/wiki/Pig_Latin for more details.
