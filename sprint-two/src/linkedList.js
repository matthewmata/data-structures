var LinkedList = function() {
  let list = {};
  list.head = null;
  list.tail = null;

  // Adds a node to the tail, and head if head is null
  list.addToTail = function(value) {
    if (!list.head) {
      list.head = new Node(value);
      list.tail = list.head; 
    } else {
      list.tail.next = new Node(value);
      list.tail = list.tail.next;
    }
  };

  // Removes head node and reassigns head to be the next node after the old head
  list.removeHead = function() {
    let oldHead = list.head.value
    list.head = list.head.next;
    return oldHead;
  };

  // Checks to see if linked list contains the target
  list.contains = function(target, node = list.head) {
    while(node) {
      if (node.value === target) {
        return true;
      } else {
        node = node.next;
      }
    }
    return false;
  };

  return list;
};

// Node helper function
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
