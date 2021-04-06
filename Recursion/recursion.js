/**
 * There are two important fundamentals in writing a recursive functions, the function must have a base case
 * in order to know when to stop calling itself, and each recursive call should have a different input.
 */

// EZPZ example #1

const countDown = (num) => {
	if (num <= 0) {
		console.log('All done')
		return
	}
	console.log(num)
	countDown(num - 1)
}

// EZPZ Example #2

const sumRange = (num) => {
	if (num === 1) return 1
	return num + sumRange(num - 1)
}

console.log(sumRange(3))
console.log(countDown(10))
