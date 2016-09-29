/** 
  * Implement a function that sorts and returns an array of numbers.
  * Your algorithm should have n*log(n) time complexity.
  *
  * Some acceptable strategies include: quicksort, mergesort, heapsort
  * Bonus for sorting in place.
  */

const sort = numbers => {
  // TODO: Implement sort here
  let length = numbers.length;
  while (length){
    for(var i = 0; i < numbers.length; i++){
      if(numbers[i] > numbers[i+1]){
        var temp = numbers[i];
        numbers[i] = numbers[i+1];
        numbers[i+1] = temp;
      }
    }
    length--;
  }
  return numbers;
};

module.exports = { sort };
