var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!list.head) {
      list.head = new Node(value);
      list.tail = list.head;
    } else {
      list.tail.next = new Node(value)
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    let removed = list.head.value;
    if (list.head === list.tail) {
      list.head = null;
      list.tail = null;
    } else {
      list.head = list.head.next;
    }
    return removed;
    
  };

  list.contains = function(target, node) {
    node = node || list.head;
    let contained = false;
    if (node.value === target) {
      return true;
    }
    if (node.next) {
      contained = list.contains(target, node.next);
    }

    return contained;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
