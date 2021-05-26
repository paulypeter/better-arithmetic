/*
 * \brief takes a natural number and squares it
 *
 * \param n integer to square
 *
 */
exports.square = function(n) {
	if typeof n === "number" {
		let res = 0;
		let add = 1;
		for (let i = 1; i < n; i++) {
			res += add;
			add += 2;
		}
		return res
	} else {
		throw 'input is not a number!'
	}
}
