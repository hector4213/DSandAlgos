/**
 * This pattern involves creating a window which  can either be an array or number from one position to another.
 * Depending on a certain condition, the window either increases or closes.( and a new window is created). Useful
 * for keeping track of a subset of data in an array / string.
 */

/**
 * Write a function called maxSubarraySum which accepts  an array of integers and a number called n. The function
 * should calculate the maximum sum of n consecutive  elements in the array
 */

// The naive approach O(n^2)(Quadratic Time), space complexity: O(1)

const maxSubarraySum = (arr, num) => {
	if (num > arr.length) {
		return null
	}
	let max = -Infinity
	for (let i = 0; i < arr.length - num + 1; i++) {
		let temp = 0
		for (let j = 0; j < num; j++) {
			temp += arr[i + j]
			if (temp > max) {
				max = temp
			}
		}
	}
	return max
}

// The refactored solution with a Time Complexity of O(n)(Linear Time)

const maxSubarraySum2 = (arr, num) => {
	let maxSum = 0
	let tempSum = 0

	if (arr.length < num) return null
	for (let i = 0; i < num; i++) {
		maxSum += arr[i]
	}
	tempSum = maxSum
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i]
		maxSum = Math.max(maxSum, tempSum)
	}
	return maxSum
}

// Tests for Naive Approach

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) === 10 ? 'PASS' : 'FAIL')

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) === 17 ? 'PASS' : 'FAIL')

console.log(maxSubarraySum([4, 2, 1, 6], 1) === 6 ? 'PASS' : 'FAIL')

console.log(maxSubarraySum([4, 2, 1, 6, 2], 4) === 13 ? 'PASS' : 'FAIL')

console.log(maxSubarraySum([4, 2, 1, 6], 1) === 6 ? 'PASS' : 'FAIL')

console.log(maxSubarraySum([], 5) === null ? 'PASS' : 'FAIL')

// Tests for O(n) approach

console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 2) === 10 ? 'PASS' : 'FAIL')

console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 4) === 17 ? 'PASS' : 'FAIL')

console.log(maxSubarraySum2([4, 2, 1, 6], 1) === 6 ? 'PASS' : 'FAIL')

console.log(maxSubarraySum2([4, 2, 1, 6, 2], 4) === 13 ? 'PASS' : 'FAIL')

console.log(maxSubarraySum2([4, 2, 1, 6], 1) === 6 ? 'PASS' : 'FAIL')

console.log(maxSubarraySum2([], 5) === null ? 'PASS' : 'FAIL')
