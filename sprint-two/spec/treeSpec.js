describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild", "contains", "removeParent" "traverse", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.removeFromParent).to.be.a('function');
    expect(tree.traverse).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should be able to run a callback on every node with the method "traverse"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    tree.addChild(5);
    tree.addChild(7);
    tree.children[0].addChild(6)
    tree.children[1].addChild(8)
    tree.traverse(func);
    expect(array).to.eql([undefined,5,6,7,8]);
  });

  it('should have a parent property on each node', function() {
    tree.addChild(1);
    expect(tree.children[0].parent).to.be.a('object');
  });

  it('should contain the correct parent node', function() {
    tree.addChild(5);
    expect(tree.children[0].parent).to.equal(tree);
  });

  it('should contain the correct parent node', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    tree.removeFromParent(6)
    expect(tree.children[0].children).to.eql([]);
  });
});
