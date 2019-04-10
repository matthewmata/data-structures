var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newInstance = Object.create(stackMethods);
  newInstance.counter = 0;
  newInstance.storage = {};
  return newInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  pop: function() {
    if (this.counter > 0) {
      this.counter--;
    }
    let popped = this.storage[this.counter];
    delete this.storage[this.counter];
    return popped;
  },
  size: function() {
    return this.counter;
  }
};


