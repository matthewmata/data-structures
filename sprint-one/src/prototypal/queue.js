var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(queueMethods);
  newInstance.counter = 0;
  newInstance.storage = {};
  return newInstance
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  dequeue: function() {
    let dequeued = this.storage[0];
    delete this.storage[0];
    for (let key in this.storage) {
      this.storage[Number(key) - 1] = this.storage[key];
    }
    if (this.counter > 0) {
      this.counter--;
    }
    delete this.storage[this.counter];
    return dequeued;
  },
  size: function() {
    return this.counter;
  }
};


