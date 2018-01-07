var repeatString = function(string, quantity) {
  if (quantity < 0) return 'ERROR';
  let repeatedString = '';
  while(quantity > 0) {
    repeatedString += string;
    quantity--;
  }
  return repeatedString;
}

module.exports = repeatString
