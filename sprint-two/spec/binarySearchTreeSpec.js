describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(100, 0);
  });

  it('should have methods named "insert", "contains", "depthFirstLog", and "rebalance"', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
    expect(binarySearchTree.rebalance).to.be.a('function');    
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(107);
    binarySearchTree.insert(106);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(106);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(50);
    binarySearchTree.insert(75);
    binarySearchTree.insert(107);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([ 100, 50, 75, 107 ]);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(25);
    binarySearchTree.insert(50);
    binarySearchTree.insert(150);
    binarySearchTree.insert(10);
    binarySearchTree.insert(140);
    binarySearchTree.insert(180);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([ 100, 25, 150, 10, 50, 140, 180 ]);
  });
  
  it('should rebalance the Binary Search Tree when the max depth is 2 times greater than the min', function() {
    binarySearchTree.insert(50);
    binarySearchTree.insert(25);
    binarySearchTree.insert(75);
    binarySearchTree.insert(150);
    binarySearchTree.insert(200);
    binarySearchTree.insert(170);
    binarySearchTree.insert(225);
    binarySearchTree.insert(160);
    binarySearchTree.insert(180);
    expect(binarySearchTree.depthChecker()).to.eql([2, 4]);
    binarySearchTree.rebalance()
    expect(binarySearchTree.left.left.value).to.equal(25);
    expect(binarySearchTree.left.right.right.value).to.equal(100);
    expect(binarySearchTree.right.left.right.value).to.equal(170);
    expect(binarySearchTree.right.right.right.value).to.equal(225);
  })
});
