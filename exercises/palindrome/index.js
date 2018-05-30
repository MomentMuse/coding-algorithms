// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// My Solutions: Hack method way, simple for loop
// Remember: Your solution should return a boolean.

function palindrome(str) {
    const strRev = str.split('').reverse().join('');
    return str === strRev;
}

function palindrome(str) {
    const strRev = '';
    for (let i = str.length -1; i >= 0; i--) {
        strRev += str[i];
    }
    return str === strRev;
}

// Alternate Solution with every array helper
// Technically not idea, because you are doing twice as much work than necessary
// It's a good idea to show your interviewer that you can solve problems in multiple ways! And compare and contrast them

function palindrome(str) {
    return str.split('').every((char, i) => {
// arrays are 0 indexed, so you need to add the -1
// compares the first char to last char, second char to second last char, and so on
        return char === str[str.length - i - 1];
    });
}


module.exports = palindrome;
