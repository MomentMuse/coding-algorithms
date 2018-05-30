// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// turn number into a string, then split into an array
// apply reverse and then join again to form a string
// parse reversed string into an integer (this removes the sign and extra zeroes)
// multiply this value by Math.sign(n) (negative n returns -1, positive n returns 1)

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
