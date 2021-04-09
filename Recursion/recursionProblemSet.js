/**
 * Write a function called power which accepts a base and an exponent. The function should return the power of the base to the eponent. This function should mimic
 * the functionality of Math.pow()
 */

const power = (base, exponent) => {
	if (exponent <= 0) return 1
	return base * power(base, exponent - 1)
}

console.log(power(2, 4) === 16 ? 'PASS' : 'FAIL')
console.log(power(2, 0) === 1 ? 'PASS' : 'FAIL')
console.log(power(2, 2) === 4 ? 'PASS' : 'FAIL')

/**
 * Write a function called factorial which accepts a number and return the factorial of that number. A factorial is the products of an integer
 * and all the integers below it, e.g, factorial( 4!) is equal to 24 because, 4 * 3 * 2 * 1 === 24. Factorial zero (0!) is always 1.
 *
 */

const factorial = (num) => {}

console.log(factorial(1) === 1 ? 'PASS' : 'FAIL')
console.log(factorial(2) === 2 ? 'PASS' : 'FAIL')
console.log(factorial(4) === 24 ? 'PASS' : 'FAIL')
console.log(factorial(7) === 5040 ? 'PASS' : 'FAIL')
