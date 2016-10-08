/**
  * A Stack is a data structure where the entities are stored in a LIFO, or Last-in-First-Out
  * order. A stack implementation will be able to "push", or add entities, and "pop",
  * or remove entities. 
  *
  * For example:
  * myStack.push(1);
  * myStack.push(2);
  * myStack.push(3);
  *
  * myStack.pop(); // => 3
  * myStack.pop(); // => 2
  * myStack.pop(); // => 1
  */

class Stack {
  constructor() {
    this.storage = [];
  }

  // Push will add an element to the stack
  push(val) {
    this.storage.push(val);
  }

  // Pop will remove an element from the stack and return that element
  pop() {
    return this.storage.pop();
  }

  // Size returns the size of the stack
  size() {
    return this.storage.length;
  }
}

module.exports = { Stack };
