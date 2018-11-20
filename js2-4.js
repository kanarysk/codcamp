/*
write a function which converts given celsius to fahrenheit
formula: (C × 9/5) + 32 = F
*/
function convert(C) {
	var result = (C * 1.8) + 32;
	return ("Fahrenheit: " + result)
}
	console.log(convert(25));