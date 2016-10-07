/**
  * A min stack can push, pop, and get the minimum value of the stack all in constant time.
  * You can assume this stack will take only numbers.
  *
  * For more information on stacks, it is recommended you try the stack prompt first.
  */

'use strict';

class MinStack {
  constructor() {
    this.storage = [];
    this.minimum = [];
  }

  // Push will add an element to the stack
  push(val) {
    // TODO: Implement push method
    this.storage.push(val);

    if(this.minimum.length === 0){
      this.minimum.push(val);
    }
    if (val < this.minimum[0]){
      this.minimum.unshift(val);
    }
  }

  // Pop will remove an element from the stack and return that element
  pop() {
    // TODO: Implement pop method
    var removed = this.storage.pop();
    if (removed === this.minimum){
      this.minimum.shift();
    }
    return removed;
  }

  // Size returns the size of the stack
  size() {
    // TODO: Implement size method
    return this.storage.length;
  }

  getMin() { // Returns the mininum value in constant time
    // TODO: Implement the getMin method
   return this.minimum[0];
  }
}

module.exports = { MinStack };
