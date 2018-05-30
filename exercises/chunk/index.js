// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// //First attempt
function chunk(array, size) {    
//create an empty array to hold chunks called 'chunked'    
    const chunked = [];
//iterate over each element of array
    for(let element of array) {
//retrieve the last element in chunked
        const last = chunked[chunked.length -1];
//if element does not exist, or if its length is equal to chunk size
        if (!last || last.length === size) {
//push a new array chunk into chunked with current element
            chunked.push([element])
        } else {
//else, add current element into the current chunk
            last.push(element);
        }
    }
//return chunked array
    return chunked;
}

//alternative approach with slice
//note: slice takes two arguments: the starting index, and the index of the item right before you make the ending slice
function chunk(array, size) {
    const chunked = [];
    let index = 0;
    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
//incremement by the size variable        
        index += size;
    }
    return chunked;
}

module.exports = chunk;
