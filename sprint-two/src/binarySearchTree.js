var BinarySearchTree = function(value, depth) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.depth = depth;
};


BinarySearchTree.prototype.insert = function(value, node, depth = 1) {
  node = node || this;
  if (node.value > value) {
    if (node.left !== null) {
      node.insert(value, node.left, depth + 1)
    } 
    else {
      node.left = new BinarySearchTree(value, depth);
    }
  } 
  else if (node.value < value) {
    if (node.right !== null) {
      node.insert(value, node.right, depth + 1)
    } 
    else {
      node.right = new BinarySearchTree(value, depth);
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

BinarySearchTree.prototype.depthChecker = function() {
  let minDepth = 0;
  let maxDepth = 0;

  let oneDeeper = (node) => {
    node = node
    if (node.left) {
      oneDeeper(node.left);
    }
    if (node.right) {
      oneDeeper(node.right);
    }
    if (!node.right && !node.left) {
      if (minDepth === 0 || node.depth < minDepth) {
        minDepth = node.depth;
      }
      if (maxDepth < node.depth) {
        maxDepth = node.depth;
      }
    }
  }
  oneDeeper(this);
  return [minDepth, maxDepth];
}

BinarySearchTree.prototype.rebalance = function() {
  let minMax =this.depthChecker();
  if (minMax[0] / minMax[1] >= 0.5) {
    let stored = [];
    var func = function(value) { stored.push(value); };
    this.depthFirstLog(func);
    stored.sort((a,b) => a - b)
    let orderedArray = [];

    //splits array in half and splices middle element and pushes to ordered Array
    let order = (array) => {
      // if array is even
      var midPoint = Math.floor(array.length / 2) -1;
      // if array.length === 1
      if (midPoint === -1) {
        midPoint = 0
      }
      // if array is odd
      if (array.length % 2 === 1 && midPoint !== 0) {
        midPoint = (array.length / 2) - 0.5;
      }

      if (midPoint !== 0) {
        var left = array.slice(0, midPoint);
      }
      if (array[1] !== undefined) {
        var right = array.slice(midPoint + 1);
      }
      let spliced = array.splice(midPoint, 1)
      orderedArray.push(spliced[0]);
      if (left) {
        order(left);
      }
      if (right) {
        order(right);
      }
    }
    order(stored);
    //reset initial node   
    let initialNode = orderedArray.splice(0, 1)
    this.value = initialNode[0];
    this.right = null;
    this.left = null;
    // add children nodes to Tree
    for (let nodeValue of orderedArray) {
      this.insert(nodeValue);
    }
  } else {
    console.log(`Minimum depth is ${minMax[0]} and Max depth is ${minMax[1]}. Max depth must be two times greater to rebalance`)
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
