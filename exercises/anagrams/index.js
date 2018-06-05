// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// RegExp regular expressions \w disregard spaces, punctuation
// const word = "HI, THERE!!!?"
// word.replace(/[^\w]/g, "").toLowerCase() returns "hithere"
// build a character map to compare strings (objects with key-value pairs)

function anagrams(stringA, stringB) {
//use helper function to build charMap objects for str A and B
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);
//pulls keys of object and returns array; tells you numbers of keys in an object
//if number of keys in a !== number of keys in b, return false
    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }
//if they do have the same number of characters, use for in loop to iterate over keys in object
//compare values of keys, if same, return true
    for(let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
//remember to return your result!
    return true;
}

//build helper function so you don't need to write the same loop for both strings
function buildCharMap(str) {
//create empty object for character map
    const charMap = {};
//for of loop iterating over string with and replace all characters that are not alphanumeric with an empty string (thus deleting all punctuation and spaces)
//all characters to lower case
//regex are hard; study them more!!
    for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//OR statement that adds one to charMap[chap] if key value pair exits; if not, creates key value pair and assigns value =1
        charMap[char] = charMap[char] + 1 || 1;
    }
//remember to RETURN the charMap object to the function call!!
    return charMap;
}

//My solution using split, sort, join
//It's the same as the alternative solution! (except I originally split it into cleanString, sortString helper func)
//I abstracted the functions away so you don't have to call twice each manually
//Compares sorted strings with punctuation removed
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join()
}

module.exports = anagrams;
