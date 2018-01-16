var fibonacci = function(index) {
  if(index < 0) {
    return "OOPS";
  } else if (index < 3) {
    return 1;
  } else {
    return fibonacci(index - 2) + fibonacci(index - 1);
  }
}

module.exports = fibonacci

// 1 1 2 3 5 8 ...
