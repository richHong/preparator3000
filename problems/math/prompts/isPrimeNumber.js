/**
  * A prime number is a number that is only divisible by 1 and itself.
  *
  * Implement isPrimeNumber to check an input number and return a 
  * boolean indicating if it is prime or not. 
  */

const isPrimeNumber = number => {
  let bool = true;
  for(let i = 2; i < number; i++){
    if (number % i === 0){
      bool = false;
    }
  }
  return bool;
};

module.exports = { isPrimeNumber };