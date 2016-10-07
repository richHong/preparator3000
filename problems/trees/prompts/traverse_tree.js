'use strict';

/**
  * NOTE: This prompt relies on the tree you developed in basic_tree. 
  * If you haven't finished it, this file will not run. 
  *
  * Implement the two tree flattening functions, one with a breadth first approach and the other
  * a depth first approach. Make sure you understand the differences.
  * 
  *   var testTree =
  *         a
  *        / \
  *       b   c
  *      / \   \
  *     d   e   f
  *
  * Given the above tree:
  * flattenTreeBreadthFirst(testTree); // => ['a', 'b', 'c', 'd', 'e', 'f']
  * flattenTreeDepthFirst(testTree); // => ['a', 'b', 'd', 'e', 'c', 'f']
  */

const flattenTreeBreadthFirst = (tree) => {
  var result = [];
  var obj = {};
  var maxDepth = 0;

  function subroutine (node, depth) {

    obj[depth] = obj[depth] || [];
    
    if (depth > maxDepth) {
      maxDepth = depth;
    }

    obj[depth].push(node.value);

    if (node.children.length){
      node.children.forEach( child => {
        subroutine(child, depth+1);
      });
    }  
  }

  subroutine(tree, 0);

  for (var i = 0; i <= maxDepth; i++) {

    result = result.concat(obj[i]);

  }

  return result;

};

const flattenTreeDepthFirst = (tree) => {
  var result = [];

  function subroutine(node) {
    result.push(node.value);

    if (node.children.length){
      node.children.forEach( child => {
        subroutine(child);
      });
    }
  }

  subroutine(tree);

  return result;
};

module.exports = {
  flattenTreeBreadthFirst,
  flattenTreeDepthFirst
};
