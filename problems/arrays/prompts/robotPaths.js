/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

const makeBoard = n => {
  const board = [];
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  board.isInBounds = function(rowIndex, colIndex) {
    return (
      0 <= rowIndex && rowIndex < n &&
      0 <= colIndex && colIndex < n
    );
  }
  return board;
};

const robotPaths = (n) => {
  let counter = 0;
  var newBoard = makeBoard(n);

  function subroutine (i ,j) {

    if (i === n-1 && j === n-1){
      counter++;
      return;
    }
    if(newBoard.isInBounds(i,j)){
      if(newBoard.hasBeenVisited(i,j)){
        return;
      } else {
        newBoard.togglePiece(i,j);

        subroutine(i+1,j);
        subroutine(i-1,j);
        subroutine(i,j+1);
        subroutine(i,j-1);

        newBoard.togglePiece(i,j);
      }
    }
  }

  subroutine(0, 0);

  return counter;
};

module.exports = { robotPaths };
