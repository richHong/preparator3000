'use strict';

// reverse and return an array in place (space complexity of O(1))
const reverseArrayInPlace = array => {
  let start = 0;
  let end = array.length - 1;
  while (start < end){
    var temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
  return array;
};

module.exports = { reverseArrayInPlace };
