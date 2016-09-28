'use strict';

/* return the position of a number [row, col] from a sorted matrix
 *
 * example:
 * var matrix = [
 *   [2, 4, 6, 7],
 *   [5, 7, 8, 11],
 *   [9, 10, 15, 18],
 *   [11, 16, 20, 25],
 * ]
 *
 * searchSortedMatrix(matrix, 15); // returns [2, 2]; 
 * searchSortedMatrix(matrix, 15); // returns [2, 2];
 */

const searchSortedMatrix = (matrix, number) => {
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      if (matrix[i][j] === number){
        return [i, j];
      }
    }
  }
  return null;
};

module.exports = { searchSortedMatrix };
