// Write a function that takes an input string and returns the reverse of that string

function reverseString(str) {
	var reversedStr = "";

	for (var i = str.length-1 ; i >= 0 ; i--) {
		reversedStr = reversedStr + str[i];
	}

	return reversedStr;
}

console.log(reverseString("monkey"));