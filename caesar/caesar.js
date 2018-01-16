var caesar = function(str, shift) {
  return str.split("").map(letter => {
    if (letter.match(/[a-zA-Z]/)) {
      let charCode = letter.charCodeAt(0);
      if (shift > 0) {
        for(let i = 0; i < shift; i++) {
          if (charCode === 122) {
            charCode = 97;
          } else if (charCode === 90) {
            charCode = 65;
          } else {
            charCode++;
          }
        }
      } else {
        for(let i = 0; i > shift; i--) {
          if (charCode === 97) {
            charCode = 122;
          } else if (charCode === 65) {
            charCode = 90;
          } else {
            charCode--;
          }
        }
      }
      return String.fromCharCode(charCode);
    } else {
      return letter;
    }
  }).join("");
}

module.exports = caesar
