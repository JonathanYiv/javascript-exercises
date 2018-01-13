function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum (...args) {
	const operands = Array.from(...args);
	return operands.reduce((total, operand) => {
		return total + operand;
	}, 0);
}

function multiply (array) {
	return array.reduce((product, operand) => {
		return product * operand;
	}, 1);
}

function power(x, y) {
	let result = x;
	for(let i = 1; i < y; i++) {
		result *= x;
	}
	return result;
}

function factorial(num) {
	let result = 1;
	for(let i = num; i > 0; i--) {
		result *= i;
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
