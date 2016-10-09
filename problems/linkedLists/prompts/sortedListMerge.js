'use strict';
/*
 * Write a function that, given the head (i.e., first node) of two sorted linked lists with numerical values, 
 * merges the linked lists in a sorted way. The function should return the head of the new linked list.
 * 
 * Example:
 * Inputs: 1 --> 7 --> 10 --> 11 & 0 --> 2 --> 5 --> 13
 * sortedListMerge(1, 0);
 * Output: 0 --> 1 --> 2 --> 5 --> 7 --> 10 --> 11 --> 13
 *
 */

const sortedListMerge = (node1, node2) => {
  var newList = {};
  
  if(node1.value < node2.value){
    newList.head = node1;
    node1 = node1.next;
  } else {
    newList.head = node2;
    node2 = node2.next;
  }
  
  function merger(list, nod1, nod2){
    if(nod1 !== null && nod2 !== null){
      if(nod1.value < nod2.value){
        list.next = nod1;
        merger(list.next, nod1.next, nod2);
      } else {
        list.next = nod2;
        merger(list.next, nod1, nod2.next);
      } 
    } else if (nod2 === null && nod1 !== null) {
      list.next = nod1;
      if(nod1.next === null){
        newList.tail = nod1;
        list.next.next = null;
      } else {
        merger(list.next, nod1.next, nod2);
      }
    } else if (nod1 === null && nod2 !== null) {
      list.next = nod2;
      if (nod2.next === null){
        newList.tail = nod1;
        list.next.next = null;
      } else {
        merger(list.next, nod1, nod2.next);
      }
    } else {
      return;
    }
  }

  merger(newList.head, node1, node2);
  return newList.head;
};

module.exports = { sortedListMerge };
