"use strict";

var removeFromArray = function(array) {
  for(let i = 1; i < arguments.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if(array[j] === arguments[i]) {
        array.splice(j, 1)
      }
    }
  }
  return array;
}

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

module.exports = removeFromArray
