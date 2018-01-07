var ftoc = function(farenheit) {
  return +((farenheit - 32) * 5 / 9).toFixed(1);
}

var ctof = function(celcius) {
  return +(celcius * 1.8 + 32).toFixed(1);
}

module.exports = {
  ftoc,
  ctof
}
