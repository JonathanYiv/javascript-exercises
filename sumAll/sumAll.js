var sumAll = function(start, finish) {
  if(start < 0 || finish < 0 || typeof start !== 'number' || typeof finish !== 'number') {
    return 'ERROR';
  }
  let sum = 0;
  if(start < finish) {
    for(let i = start; i <= finish; i++) {
      sum += i;
    }
  } else {
    for(let i = finish; i <= start; i++) {
      sum += i;
    }
  }
  return sum;
}

module.exports = sumAll
