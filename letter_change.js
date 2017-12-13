// Write a function to change each letter in a string to the next letter in the alphabet
// Capitalize every vowel and ignore special characters


function letterChange(str) {
	var outputstr = "";

	var outputstr = str.replace(/[a-z]/gi, function(c) { 
		return (c === 'z' || c === 'Z') ? 'a' : String.fromCharCode(c.charCodeAt()+1);
	});

	outputstr = outputstr.replace(/a|e|i|o|u/gi, function(v) { 
		return v.toUpperCase();
	});

	// code goes here  
	return outputstr; 

}

console.log(letterChange("Capta!n sail away to the zoo!"));