// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//SOLUTION 1: reverse() method**
// method reverse() is intended for ARRAYS.
// 1. Turn str into array
// 2. Call reverse method on array
// 3. Call join on array to turn into string
// 4. Return the result

function reverse(str) {
    return str.split('').reverse().join('');
}

//SOLUTION 2: For Loop
// 1. Create an empty string called 'reversedStr'
// 2. Iterate over each character in string in reverse order
// 3. Take each character and add it to reversedStr variable
// 4. Return reversedStr

function reverse(str) {
   let reversedStr = '';
   for(let i = str.length - 1; i >= 0; i--) {
       reversedStr += str[i];
   }
   return reversedStr;
}

// instead of classic for loop syntax, use ES6 for of syntax
// this is confusing!!

function reverse(str) {
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}

//SOLUTION 3: arrow function and reduce
//uses ES6
//omg I don't get it what's happening D:?!
//this is the most impressive

function reverse(str) {
   return str.split('').reduce((rev, char) => char + rev, '');
}


module.exports = reverse;
