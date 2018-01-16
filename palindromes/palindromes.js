var palindromes = function(text) {
  const regex = new RegExp(/[!,\.\s]/, 'g');
  const strippedText = text.toLowerCase().replace(regex, "");
  const reversedText = strippedText.split("").reverse().join("");
  return reversedText === strippedText ? true : false;
}

module.exports = palindromes
