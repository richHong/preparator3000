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
  let newList = {};
      newList.head = null;

  function merger(list, curNode1, curNode2){
    if (list.head === null){
      if (curNode1.value < curNode2.value){
        list.head = curNode1;
        if(curNode1.next){
          merger(list.head, curNode1.next, curNode2);
        }
      } else {
        list.head = curNode2;
        if (curNode2.next){
          merger(list.head, curNode1, curNode2.next);
        }
      }
    } else {
      if (curNode1.value < curNode2.value){
        list.next = curNode1;
        if (curNode1.next){
          merger(list.next, curNode2, curNode1.next);
        } else if (curNode2.next){
          merger(list.next, curNode1, curNode2.next);
        } 
      } else {
        list.next = curNode2;
        if (curNode2.next) {
          merger(list.next, curNode1, curNode2.next);
        } else if (curNode1.next){
          merger(list.next, curNode2, curNode1.next);
        }  
      }
    }
  }

  merger(newList, node1, node2);

  return newList.head;
};

module.exports = { sortedListMerge };
