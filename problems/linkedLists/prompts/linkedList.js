'use strict';

class LinkedList {

  constructor() {
    this.head=null;
    this.tail=null;
  }

  contains(val) { // Returns a boolean indicating whether the input value is present
    var found = false;
    function find(node){
      if (node.value === val){
        found = true;
      }
      if (node.next){
        find(node.next);
      }
    }
    find(this.head);
    return found;
  }

  indexOf(val) { // Returns the numerical order or "index" of the node with value. Returns -1 if not present
    let counter = 0;
    var found = false;
    function find(node){
      if (node.value === val){
        found = true;
        return counter;
      }
      if (node.next){
        counter++;
        find(node.next);
      }
    }
    let index = find(this.head);
    if (!found){
      return -1;
    } else {
      return index;
    }
  }

  addToHead(val) { // Adds a node to head
    let node = {
      value: val,
      next: null
    };
    if (this.tail === null){
      this.head = node;
      this.tail = node;
    } else {
      var temp = this.head;
      this.head = node;
      this.head.next = temp;
    }
  }

  addToTail(val) { // Adds a node to tail
    let node = {
      value: val,
      next: null
    };
    if (this.tail === null){
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  insertAfter(node, val) { 
    // Given a node and value, it acts similar to addToTail, except it creates a node after the input node
    function find (curNode){
      if (curNode.value === node.value){
        let node ={
          value: val,
          next: curNode.next
        };
        curNode.next = node;
      } else if (curNode.next) {
        find(curNode.next);
      }
    } 
    find(this.head);
  }
}

module.exports = { LinkedList };
