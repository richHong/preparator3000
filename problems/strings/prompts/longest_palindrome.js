/**
  * A palindrome is a word, phrase, number, or other sequence of characters 
  * which reads the same backward or forward.
  *
  * The function longestPalindrome should take a string as an input and find the longest palindrome within it.
  * You may include spaces. 
  * 
  * For instance:
  * longestPalindrome('dad'); //  => 'dad'
  * longestPalindrome('a'); // => 'a'
  * longestPalindrome('amaryllis sillyrama'); // => 'amaryllis sillyrama'
  */

const longestPalindrome = string => {
  var length = string.length;
  var result = '';
  var longestPalindrome = function(left, right) { 
      while (left >= 0 && right < length && string[left] === string[right]) {
        left--;
        right++;
      }
      return string.slice(left+1, right);
    };
  // Loop through the whole string,
  // checking for palindromes
  for (var i = 0; i < length; i++) {
    var oddPal = longestPalindrome(i - 1, i + 1);
    var evenPal = (i + 1 < length) ?
      longestPalindrome(i, i + 1) : '';

    if (oddPal.length > result.length)
      result = oddPal;
    if (evenPal.length > result.length)
      result = evenPal;
  }
  return result;
};

module.exports = { longestPalindrome };
