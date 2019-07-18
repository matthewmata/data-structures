var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

// Adds child to the tree
treeMethods.addChild = function(value) {
  let child = new Tree(value)
  this.children.push(child);
  child.parent = this;
};

// Checks to see if tree contains the target
treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.children) {
    for (let child of this.children) {
      if (child.contains(target)) {
        return true;
      };
    }
  }
  return false;
};

// Removes the child Node from the parent Node
treeMethods.removeFromParent = function(childNodeValue) {
  if (this.value === childNodeValue) {
    for (let i = 0; i < this.parent.children.length; i++) {
      if (this.parent.children[i].value === childNodeValue) {
        this.parent.children.splice(i, 1);
      }
    }
    this.parent = null;
  }
  if (this.children) {
    for (let child of this.children) {
      child.removeFromParent(childNodeValue);
    }
  }
}

// Runs a callback on every Node in the tree
treeMethods.traverse = function(cb) {
  cb(this.value);
  if (this.children) {
    for (let child of this.children) {
      child.traverse(cb);
    }
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
