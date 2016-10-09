'use strict';

/**
 * Write a function that takes the first node of a singly-linked
 * list which determines if that list has a cycle. A cycle is when
 * a node in the linked list points to another node previous in the
 * list, causing an infinite loop.
 *
 * For example:
 *
 *     [node]->[node]->[node]->[node]
 *                       ^       |
 *                       |       v
 *                     [node]<-[node]
 */

const hasCycle = linkedList => {
  var fast = linkedList.head;
  var slow = linkedList.head;
  var pause = true;

  while (fast = fast.next) {
    if (fast === slow) { return true; }
    if (!pause) { slow = slow.next; }  
    pause = !pause;
  }
  return false;
};

module.exports = { hasCycle };
