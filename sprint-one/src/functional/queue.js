var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    let dequeued = storage[0];
    delete storage[0];
    for(let key in storage) {
      storage[Number(key) - 1] = storage[key];
    }
    delete storage[Number(counter) - 1]
    if (counter > 0) {
      counter--;
    }
    return dequeued;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
