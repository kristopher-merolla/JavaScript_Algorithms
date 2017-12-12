// Write a function that returns the factorial of the input number
// Assume input number is positive

function factorial(num) {
	var factNum = 1;

	for (var i = num ; i > 1 ; i--) {
		factNum *= i;
	}

	return factNum;
}


console.log(factorial(4));