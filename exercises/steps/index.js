// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//Okay I was close but no cigar
// function steps(n) {
//     let str = '';   
//     for (let i = 0; i < n; i++) {
//         str += '#';
//         if (str.length === i + 1) {
//             while (str.length < n) {
//                 str += ' ';
//             }
//         }
//         console.log(str);
//     } 
// }

//Solution #1: it seems you need to use nested for loops
//consider columns and rows
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = '';
//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
//     //console log stair inside row for loop, so you get one string logged for each row
//         console.log(stair);
//     }
// }

//Solution #2: Recursion!
function steps(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }
    steps(n, row, stair);
}

//Alternate solution from comments using .repeat method
function steps(n) {
    for (let i = 1; i <= n; i++) {
    let string = '';
    string += ('#'.repeat(i));
    string += (' '.repeat(n-i))
    console.log(string);
  }
}

module.exports = steps;
