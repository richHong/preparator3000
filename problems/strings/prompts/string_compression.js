/**
  * Implement a method to perform basic string compression using the counts of repeated characters.
  * If the ‘compressed’ string would not become smaller than the original string,
  * your method should return the original string. 
  *
  * For example:
  * stringCompression('aabbbcddd') // => 'a2b3c1d3'
  * stringCompression('c') // => 'c'
  */



const stringCompression = string => {
  let arr = string.split('');
  let str = '';
  let obj = {};
  arr.forEach((letter, index, list) => {
    if(letter === list[index +1]){
      if (obj.hasOwnProperty(letter)){
        obj[letter] += 1;
      } else {
        obj[letter] = 1;
      }
    } else {
      if (obj.hasOwnProperty(letter)){
        obj[letter] += 1;
      } else {
        obj[letter] = 1;
      }
      str += letter+obj[letter].toString();
      obj = {};
    }
  });
  if(string.length <= str.length){
    return string;
  } else {
    return str;
  }
};

console.log(stringCompression('aabcccccaaa'))
console.log(stringCompression('bbbccfffd'))
module.exports = { stringCompression };
