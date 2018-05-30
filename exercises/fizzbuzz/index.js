// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// My solution using a simple for loop and ternary operator
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        f = i % 3 === 0; 
        b = i % 5 === 0;
    console.log(f? (b? 'fizzbuzz':'fizz') : (b? 'buzz':i));
    }
}

//Another clean and concise way to solve with || statement
function fizzBuzz(n) {
//iterate with for loop
    for (let i = 1; i <= n; i++) {
//declare and empty string for each iteration
      let str = '';
//if n mod 3, add fizz to string
      if (i % 3 ===0) str += 'fizz';
//if n mod 5, add buzz to string (note if both, fizzbuzz will be added)
      if (i % 5 ===0) str += 'buzz';
//print string if present, if string empty, print i
      console.log(str || i);
    }
  }  

//Manual else if statement way
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
//is the number a multiple of 3 && 5?
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
//is the number a multiple of 3?            
        } else if (i % 3 === 0) {
            console.log('fizz');
//is the number a multiple of 5?
        } else if (i % 5 === 0) {
            console.log('buzz');
//not a multiple of 3 or 5
        } else {
            console.log(i);
        }
    }
}

module.exports = fizzBuzz;
