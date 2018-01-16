var snakeCase = function(text) {
  const punctuation = new RegExp(/[?,\.]/, 'g');
  const camelCase = new RegExp(/([a-z]{2})([A-Z])/, 'g');
  return text.replace(/-/, " ")
             .replace(/\.\./g, " ")
             .trim()
             .replace(camelCase, "$1 $2")
             .toLowerCase()
             .replace(punctuation, "")
             .split(" ")
             .join("_");
}

module.exports = snakeCase

