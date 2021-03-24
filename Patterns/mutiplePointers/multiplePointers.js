/**
 * MUTIPLE POINTERS: Creating pointers or values that correspond to an index or position and move towards the beginning, end, or middle
 * based on a certain condition. Very efficient for solving problems with minimal space complexity as well.
 */

/**
 * Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0
 * Return an array that includes both values that sum to zero or undefined if a pair does not exist.
 */

// The naive approach O(n^2)(Quadratic Time), space complexity: O(1)

const sumZero = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === 0) {
				return [arr[i], arr[j]]
			}
		}
	}
}
