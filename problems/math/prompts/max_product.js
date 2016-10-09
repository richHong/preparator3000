/**
  * Given a number, find the max product that
  * can result from breaking the input number into multiple
  * pieces.
  * 
  * Input number will be positive and an integer.
  *
  * For example:
  * the number 8 can be broken into :
  * 1,7
  * 1,1,5
  * 2,6
  * 3,5
  * 3,3,2
  * 2,4,2
  * 2,2,2,2
  * ...etc
  *
  * maxProduct(8); // => 18
  * Because the largets product can be obtained by 3, 3, 2.
  */

const maxProduct = int => {

  var largest = 0;

  function range (n){
    var range = [];
    for (var i = 1; i < int; i++){
      range.push(i);
    }
    return range;
  }

  var startingRange = range(int/2);

  function subroutine(array, options, sum){
      if (sum === int){
        var product = array.reduce((a,b) =>  a * b);
        if(product > largest){
          largest = product;
        }
      } else {
        var newRange = range(int - sum);
        newRange.forEach(number =>{
          var newArray = [].concat(array);
          var newSum = sum+number;
          newArray.push(number);
          if (newSum <= int){
            subroutine(newArray, newRange, newSum);
          }
        });
      }
  }
  subroutine([], startingRange, 0);
  return largest;
};
maxProduct(20);
module.exports = { maxProduct };
