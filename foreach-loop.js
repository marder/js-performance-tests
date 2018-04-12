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
		name: "array.forEach()",
		callback: testFunctionLoop
	},
	{
		name: "for(var item of array)",
		callback: testForOfLoop
	},
	{
		name: "for (var i=0; i<array.length; i++)",
		callback: testForILoop
	}
]

tester("For each loops", variations);

function testFunctionLoop() {
	var sum = 0;
	testArray.forEach(function (v) {
		sum += v;
	});
}

function testForOfLoop() {
	var sum = 0;
	for (var v of testArray) {
		sum += v;
	}
}

function testForILoop() {
	var sum = 0;
	for (let i = 0; i < testArray.length; i++) {
		sum += testArray[i];
	}
}
