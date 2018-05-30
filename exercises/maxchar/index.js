// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Create character map as an object
// and then iterate over object properties to determine values and find the most frequent property, or char

function maxChar(str) {
    const charMap = {};
//define variables for for in loop iteration    
    let maxValue = 0;
    let maxChar = '';
    for (let char of str) {
//if property char of object charMap exists, increment by one
        if (charMap[char]) {
            charMap[char]++;
        } else {
//else if it doesn't exist, set property char equal to 1
            charMap[char] = 1
        }
    }
//iterate through object with for in loop
    for (let char in charMap) {
        if (charMap[char] > maxValue) {
            maxValue = charMap[char];
            maxChar = char;
        }
    }
//after iteration, maxChar will be assigned the property with mxValue
    return maxChar;
}


//My version using the ternary operator

function maxChar(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';
    for (let char of str) {
        charMap[char] ? charMap[char]++ : charMap[char] = 1;
    }
    for (let char in charMap) {
        if (charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    return maxChar;
    }
}

module.exports = maxChar;
