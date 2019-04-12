var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.addToTail = function(value) {
  // init a new head
  if (this.head === null) {
    this.head = new Node(value);
    this.tail = this.head;
  // adding to tail
  } else {
    let previous = this.tail;
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
    this.tail.previous = previous;
  }
};
  
DoublyLinkedList.prototype.removeHead = function() {
  let oldHeadValue = this.head.value;
  this.head = this.head.next;
  if (this.head) {
    this.head.previous = null;
  }
  return oldHeadValue;
};
  
DoublyLinkedList.prototype.contains = function(target, node) {
  node = node || this.head;
  let contained = false;
  if (node.value === target) {
    contained = true;
  }
  if (node.next && !contained) {
    contained = this.contains(target, node.next);
  }
  return contained;
};

var Node = function(value) {
  this.value = value;
  this.next = null;
  this.previous = null;
};

