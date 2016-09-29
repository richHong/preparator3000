/**
  * Write a recursive function to multiply two positive integers without using the * operator.
  * You can use addition, substraction, and bit shifting operators but you should minimize the number
  * of those operations.
  *
  * recursiveMultiply(2, 4) // 8
  * recursiveMultiply(3, 10) // 30
  *
  * Extra Credit: Handle multiplication of negative numbers
  * recursiveMultiply(2, 4) // 8
  */

const recursiveMultiply = (num1, num2, total) => {
  if (!total){
    total = 0;
  }
  if (num1 > 0){
    total += num2;
    num1 -= 1;
    return recursiveMultiply(num1, num2, total);
  } else {
    return total;
  }
};

var answer = recursiveMultiply(2,3);

module.exports = { recursiveMultiply };
