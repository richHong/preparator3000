'use strict';

// determine if every element in the array passes a truth test
const every = (array, truthTest) => {
  return array.reduce((start, element) => {
    return start && truthTest(element);
  }, true);
};

module.exports = { every };
