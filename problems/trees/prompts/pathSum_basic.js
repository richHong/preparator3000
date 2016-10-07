'use strict';

/**
  * Given an input of a Binary Tree and a integer, 
  * return a boolean if the tree contains a path root to leaf that sums to the target.
  *
  * You can assume the Binary Tree will have .left & .right properties.
  *
  * Given the below binary tree and sum of 13:
  *       3
  *      / \
  *     1   2
  *    / \   \
  *   6   9   4
  *
  * Return true, as 3->1->9 = 13
  */

const pathSum = (root, sum) => {

  var result = false;

  function subroutine (node, total){
    if (!node.left && !node.right){
      if (total === sum){
        result = true;
      }
    }
    if (node.right){
      subroutine(node.right, total + node.right.value);
    }
    if (node.left){
      subroutine(node.left, total + node.left.value);
    }
  }

  subroutine(root, root.value);
  
  return result;
};

module.exports = { pathSum };
