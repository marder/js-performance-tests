
function test(title, variations) {

	if (variations.length == 0)
		return;

	var winner = null;

	console.log("-----------------------------------------------------")
	console.log(title)
	console.log("Tests:")

	for (let variation of variations) {

		let start = Date.now();
		variation.callback();
		let end = Date.now();

		variation.time = {
			start: start,
			end: end,
			duration: end - start
		}
		console.log(`   - ${variation.name}: Duration=${variation.time.duration}ms`);

		if (!winner || winner.time.duration > variation.time.duration) {
			winner = variation;
		}

	}

	console.log(`And the winner is "${winner.name}" with ${winner.time.duration}ms.`)
	console.log("-----------------------------------------------------")

}

module.exports = test;