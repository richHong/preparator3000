'use strict';

// determine if some elements in the array pass a truth test
const some = (array, truthTest) => {
  return array.reduce((start, element) => {
    return start || truthTest(element);
  }, false);
};

module.exports = { some };
