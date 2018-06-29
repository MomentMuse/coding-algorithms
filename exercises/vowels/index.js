// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//My attempt
// function vowels(str) {
//     return str.match(/[aeiou]/gi).length;
// }
//fails on an edge case when there are no vowels

//Solution #1: Iterative
function vowels(str) {
    let vowelCount = 0;
    const vowelCheck = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str.toLowerCase()) {
        if (vowelCheck.includes(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
}

//Solution #2
function vowels(str) {
   const matches = str.match(/[aeiou]/gi);
   // if no matches are found, matches will return null
   return matches ? matches.length : 0;
}

module.exports = vowels;
