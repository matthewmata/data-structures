var Tree = function(value, parent = null) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = parent;
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(new Tree(value, this));
};

treeMethods.contains = function(target, node) {
  node = node || this;
  let contained = false;
  if (node.value === target) {
    return true;
  }
  if (node.children.length) {
    for(let child of node.children) {
      if (!contained) {
        contained = this.contains(target, child);
      } else {
        return true;
      }
    }
  }
  return contained;
};

treeMethods.removeFromParent = function(childNodeValue, node) {
  node = node || this;
  let removed = false;
  if (node.children.length) {
    for(let i = 0; i < node.children.length; i++) {
      if (!removed) {
        if (node.children[i].value === childNodeValue) {
          node.children[i].parent === null;
          node.children.splice(i, 1);
          return true;
        } else if (node.children[i].children){
          removed = this.removeFromParent(childNodeValue, node.children[i]);
        }
      } else {
        return true;
      }
    }
  }
  return removed;
}

treeMethods.traverse = function(cb, node) {
  node = node || this
  cb(node.value);
  if (node.children) {
    for(let child of node.children) {
      node.traverse(cb, child);
    }
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
