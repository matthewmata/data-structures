var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(new Tree(value));
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



/*
 * Complexity: What is the time complexity of the above functions?
 */
