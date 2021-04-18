/**
 * Linear Search Pseudo Code
 *
 * Create a function that acceps an array and value
 * Loop through the array and check if the current array elementisd equal to the value
 * If it is, return the index at which the element is found
 * if not found return - 1
 */

// This will search the ENTIRE array

const linSearch = (arr, val) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			return i
		}
	}
	return -1
}

console.log('+++++++TESTS+++++++')
console.log(linSearch([4, 3, 2], 4) === 0 ? 'PASS' : 'FAIL')
console.log(linSearch([4, 3, 2], 3) === 1 ? 'PASS' : 'FAIL')
console.log(linSearch([4, 3, 2], 2) === 2 ? 'PASS' : 'FAIL')
