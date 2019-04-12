var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value, node) {
  node = node || this;
  if (node.value > value) {
    if (node.left !== null) {
      node.insert(value, node.left)
    } 
    else {
      node.left = new BinarySearchTree(value);
    }
  } 
  else if (node.value < value) {
    if (node.right !== null) {
      node.insert(value, node.right)
    } 
    else {
      node.right = new BinarySearchTree(value);
    }
  }
}

BinarySearchTree.prototype.contains = function(value, node) {
  node = node || this;
  let contained = false;

  if (node.value === value) {
    contained = true;
  }
  if (node.left && !contained) {
    contained = node.contains(value, node.left)
  }
  if (node.right && !contained) {
    contained = node.contains(value, node.right)
  }

  return contained;
}

BinarySearchTree.prototype.depthFirstLog = function(cb, node) {
  node = node || this;
  cb(node.value);
  if (node.left) {
    node.depthFirstLog(cb, node.left)
  }
  if (node.right) {
    node.depthFirstLog(cb, node.right)
  }
}


BinarySearchTree.prototype.breadthFirstLog = function(cb, node) {
  let queue = [this];
  while(queue.length) {
    if (queue[0].left) {
      queue.push(queue[0].left);
    }
    if (queue[0].right) {
      queue.push(queue[0].right);
    }
    let shifted = queue.shift();
    cb(shifted.value);
  }

}

/*
 * Complexity: What is the time complexity of the above functions?
 */
