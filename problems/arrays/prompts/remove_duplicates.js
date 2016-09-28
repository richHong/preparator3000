'use strict';

// returns an array without duplicates
const removeDuplicates = (array) => {
  let obj = {};
  array.forEach( element => {
    obj[element] = element;
  });
  let results = [];
  for (var key in obj) {
    results.push(obj[key]);
  }
  return results;
};

module.exports = { removeDuplicates };
