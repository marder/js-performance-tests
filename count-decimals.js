/**
 * This test generates a random number array with a large size
 * This array will be iterated in different ways, returning the sum of the array
 * All variations will use the same array instance as source
 */

var tester = require("./tester/tester");

var title = "Foreach loops";
var testArray = new Array(10000000);

testArray.forEach(function (v, i, a) {
	a[i] = Math.random();
});

// Declare test functions

var variations = [
	{
		name: "Count by string splitting",
		callback: CountByStringSplitting
	},
	{
		name: "Multiply by power of x",
		callback: MultiplyByPowerOfX
	}
]

tester(`Count decimals of ${testArray.length} numbers`, variations);

function CountByStringSplitting() {
	var result = new Array(testArray.length);
	testArray.forEach(function (dec, i) {
		result[i] = __countDecunalsByString(dec, 0);
	})
	return result
}

function MultiplyByPowerOfX() {
	var result = new Array(testArray.length);
	testArray.forEach(function (dec, i) {
		result[i] = __countDecimals(dec, 0);
	})
	return result;
}

function __countDecunalsByString(d) {
	var s = d.toString();
	var sepIndex = s.indexOf(".")
	return sepIndex < 0 ? 0 : s.substring(sepIndex + 1);
}
function __countDecimals(d, i) {
	var multiplied = (d * Math.pow(10, i));
	if (Math.round(multiplied) == multiplied)
		return i;
	return __countDecimals(d, i + 1);
}
