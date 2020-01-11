const LinkedList = function() {
  this.head = null;
  this.tail = null;
}

// Adds a node to the tail, and head if head is null
LinkedList.prototype.addToTail = function(value) {
  const node = new Node(value);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

// Removes head node and reassigns head to be the next node after the old head
LinkedList.prototype.removeHead = function() {
  const oldHead = this.head;
  this.head = this.head.next;
  // if no head then replaces the tail to be null
  if (!this.head) {
    this.tail = null;
  }
  return oldHead.value;
};

// Checks to see if linked list contains the target
LinkedList.prototype.contains = function(target, node = this.head) {
  if (node.value === target) {
    return true;
  } else if (node.next) {
    return this.contains(target, node.next);
  } else {
    return false;
  }
};

// Node helper function
const Node = function(value) {
  this.value = value;
  this.next = null;
};

/*
 * Complexity: What is the time complexity of the above functions?

 addtoTail - 0(1) constant time
 removeFromHeal - 0(1) constant time
 contains - 0(n) linear time
 */

 