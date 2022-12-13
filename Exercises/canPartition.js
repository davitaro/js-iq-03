/*
Write a function that returns true if you can partition an array into one element and the rest, such that this element is equal to the product of all other elements excluding itself.

Examples
canPartition([2, 8, 4, 1]) ➞ true
// 8 = 2 x 4 x 1

canPartition([-1, -10, 1, -2, 20]) ➞ false

canPartition([-1, -20, 5, -1, -2, 2]) ➞ true
Notes
The array may contain duplicates.
Multiple solutions can exist, any solution is sufficient to return true.
*/

function canPartition(array) {
  let result;
  let i;

  for (i = 0; i < array.length; i++) {
    let filterValues = (current, index) => i !== index;
    let otherValuesArray = array.filter(filterValues);
    
    // combine lines: let filterValues = array.filter((current,index) => i!==index); 
    
    const reducer = (total, current) => total * current;
    
    let product = otherValuesArray.reduce(reducer, 1);
    let result = product === array[i];
    if (result) return result;
  }
  result = false;
  return result;
}

exports.solution = canPartition;

function canPartition (arr) {
  for (let i = 0; i< arr.length; i++){
    const pointer = arr[i]
  }
}
