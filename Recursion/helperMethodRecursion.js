/**
 * Helper method recursion is used when we need to compile a list of data, like an array.
 * The reason we do this is because without the helper method, if you were to try to set an empty array to
 * collect values and using a recursive function, everytime its called, the empty array will be
 * initialzied as empty.
 */

const collectOddValues = (arr) => {
	let result = [] // Outer scoped variable

	const helper = (helperInput) => {
		// Modify the outer scoped variable
		if (helperInput.length === 0) {
			return
		}

		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0])
		}
		helper(helperInput.slice(1))
	}

	helper(arr)
	return result
}

console.log(collectOddValues([3, 3, 2, 5, 4, 8, 10, 13]))
