/*
Given two strings, write a function to determine is the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by earranging the letters of another, such as cinema
can be formed from iceman.
*/

// My O(n) solution

const isAnagram = (str1, str2) => {
	if (str1.length !== str2.length) {
		return false
	}

	const letters1 = str1.split('')
	const letters2 = str2.split('')

	const letterMap = {}

	letters1.forEach((letter) =>
		letterMap[letter] ? letterMap[letter]++ : (letterMap[letter] = 1),
	)

	for (let letter of letters2) {
		if (!letterMap[letter]) {
			return false
		}
		if (letterMap[letter]) {
			letterMap[letter] -= 1
		}
	}
	return true
}

// Tests

console.log(isAnagram('racecar', 'carrace') === true ? 'Correct' : 'Incorrect')
console.log(isAnagram('taco', 'octa') === true ? 'Correct' : 'Incorrect')
console.log(isAnagram('moon', 'noon') === false ? 'Correct' : 'Incorrect')
