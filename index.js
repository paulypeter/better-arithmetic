/*
 * \brief takes a natural number and squares it
 *
 * \param n integer to square
 *
 */
exports.square = function(n) {
	if (typeof n === "number") {
		if (n < 0) {
			return this.square(-n);
		}
		let res = 0;
		let add = 1;
		for (let i = 0; i < n; i++) {
			res += add;
			add += 2;
		}
		return res
	} else {
		throw 'input is not a number!'
	}
}

/*
 * \brief multiplies two numbers
 *
 * \params a, b integer numbers
 */
exports.multiply = function(a, b) {
	if (typeof a === typeof b && typeof a === "number") {
		if (a > b) {
			let c = a;
			a = b;
			b = c;
		}
		if (b < 0) {
			return this.multiply(this.sub(0, b), this.sub(0, a));
		} else if (a < 0) {
			return this.sub(0, this.multiply(this.sub(0, a), b))
		} else if (a == 0) {
			return 0;
		} else if (a == 1) {
			return b;
		} else {
			return this.add(this.square(a), this.multiply(a, this.sub(b, a)));
		}
	} else {
		throw 'Input needs to be two numbers.'
	}
}

/*
 * \brief integer division of two numbers
 *
 * \params a, b integer numbers
 */
exports.div = function(a, b) {
	if (typeof a === typeof b && typeof a === "number") {
		let i = 0;
		prod = this.multiply(i, b);
		while (prod <= a) {
			i = this.add(i, 1);
			prod = this.multiply(i, b);
		}
		return this.sub(i, 1);
	} else {
		throw 'Input needs to be two numbers.'
	}
}

/*
 * \brief returns remainder from integer division
 *
 * \params a, b integer numbers
 */
exports.modulo = function(a, b) {
	if (typeof a === typeof b && typeof a === "number") {
		let div = this.div(a, b);
		let prod = this.multiply(b, div);
		return this.sub(a, prod);
	} else {
		throw 'Input needs to be two numbers.'
	}
}

/*
 * \brief adds two numbers
 *
 * \params a, b integer numbers
 */
exports.add = function(a, b) {
	if (typeof a === typeof b && typeof a === "number") {
		// return this.div(this.sub(this.square(a), this.square(b)), this.sub(a, b))
		if (a > b) {
			let c = a;
			a = b;
			b = c;
		}
		if (b < 0) {
			return this.sub(0, this.add(this.sub(0, a), this.sub(0, b)));
		} else if (a < 0) {
			return this.sub(b, this.sub(0, a));
		} else if (a == 0) {
			return b;
		} else {
			while (a > 0) {
				a = this.sub(a, 1);
				b = this.sub(b, this.sub(0, 1));
			}
			return b;
		}
	} else {
		throw 'Input needs to be two numbers.'
	}
}

exports.sub = function(a, b) {
	return a - b;
}
