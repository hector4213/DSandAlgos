/**
 * This pattern uses objects or sets to collect values/frequencies of values
 * This can often avoid the need for nested loops or O(n^2)operations with arrays/strings
 */

/**
 * Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's
 * corresponding value squared in the second array. The frequency of values must be the same.
 */

// The naive approach O(n^2)(Quadratic Time) solution

const same = (arr1, arr2) => {
	if (arr1.length !== arr2.length) {
		return false
	}

	for (let i = 0; i < arr1.length; i++) {
		let correctIndex = arr2.indexOf(arr1[i] ** 2)
		if (correctIndex === -1) {
			return false
		}
		arr2.splice(correctIndex, 1)
	}
	return true
}

// The refactored solution with a Time Complexity of O(n)(Linear Time)

const sameRefactored = (arr1, arr2) => {
	if (arr1.length !== arr2.length) {
		return false
	}

	const counterMap1 = {}
	const counterMap2 = {}

	arr1.forEach((num) =>
		counterMap1[num] ? counterMap1[num]++ : (counterMap1[num] = 1),
	)

	arr2.forEach((num) =>
		counterMap2[num] ? counterMap2[num]++ : (counterMap2[num] = 1),
	)

	for (let key in counterMap1) {
		if (!counterMap2[key ** 2]) {
			return false
		}
		if (counterMap2[key ** 2] !== counterMap1[key]) {
			return false
		}
	}
	return true
}
