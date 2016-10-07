'use strict';

/**
  * Implement a basic tree with the methods addChild and contains.
  * Every tree's children should be accessible through .children[]
  * Children should be able to add children directly. 
  */ 

class Tree {
  constructor(val) {
    // super();
    this.value = val;
    this.children = [];
  }

  addChild(val) {
    let newTree = new Tree(val);
    this.children.push(newTree);
  }

  contains(val) {

    var found = false;

    function subroutine(node) {  
      if (node.value === val){
        found = true;
      } 
      if (node.children.length > 0) {
        node.children.forEach( child => {
          subroutine(child);
        });
      }
    }

    subroutine(this);

    return found;
  }
};

module.exports = { Tree };
