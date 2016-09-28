'use strict';

// flatten a nested array into a flat (1D) array
const flatten = arrays => {
	// your code here
  let results = [];

  function subroutine(array){
    array.forEach(element => {
      Array.isArray(element) ? subroutine(element) : results.push(element);
    });
  };
  
  subroutine(arrays);
  return results;
};

module.exports = { flatten };
