// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//my attempt... it didn't work :(
// function capitalize(str) {
//     let newStr = '';
//     str.split(' ').forEach((word) => {
//         newStr += word[0].toUpperCase() + word.slice(1);
//     })
//     return newStr;
// }
//input "this is a long string to use" created output "ThisIsALongStringToUse"

//Solution #1
//why mine didn't work: by setting answer to an empty array and joining it together at the end, you can join items with a space in between
function capitalize(str) {
    const words = [];
    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
}

//Solution #2
//this one is long and convoluted, I don't like
//okay maybe it's not -so- difficult to understand
function capitalize(str) {
//first capital letter is hardcoded because there is no space to the left of it    
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

module.exports = capitalize;
