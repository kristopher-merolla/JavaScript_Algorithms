// Write a function that take in a string and returns the longest word in the string
// Ignoring special characters and returning the first instance of the longest string if multiple of same longest length


function longestWord(str) {
	// create variables for longest length and position
	var longestLen = 0;
	var longestPos = 0;

	// match will return an array of matches for regex expression
	var wordArr = str.match(/[a-z0-9]+/gi)

	// step through array and compare to find longest
	for (var i = 0 ; i<wordArr.length ; i++) {
		if (wordArr[i].length > longestLen) {
			longestLen = wordArr[i].length;
			longestPos = i;
		}
	}

	return wordArr[longestPos];
}

str="This is a string, & whateverl the longest word is is the longest word in this string! whateverx!"

console.log(longestWord(str))
