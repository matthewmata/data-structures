const Tree = function(value) {
  this.value = value;
  this.parent = null;
  this.children = [];
};

// Adds child to the tree
Tree.prototype.addChild = function(value) {
  const node = new Tree(value);
  node.parent = this;
  this.children.push(node);
};

// Checks to see if tree contains the target
Tree.prototype.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      };
    }
    return false;
  } else {
    return false;
  }
};

// Removes the child Node from the parent Node
Tree.prototype.removeFromParent = function(childNodeValue, index = null) {
  if (this.value === childNodeValue) {
    this.parent.children.splice(index, 1);
    this.parent = null;
  } else if (this.children.length > 0) {
    // var childrenLength = this.children.length;
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].removeFromParent(childNodeValue, i);
    }
  }
}

// Runs a callback on every Node in the tree
Tree.prototype.traverse = function(cb) {
  cb(this.value);
  for (let i = 0; i < this.children.length; i++) {
    this.children[i].traverse(cb)
  }
}


/*
 * Complexity: What is the time complexity of the above functions?

  addChild - 0(1) constant time
  contains - 0(n) linear time
  removeFromParent - 0(n^2) quadratic time
 */
