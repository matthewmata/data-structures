var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

// Adds item to set
setPrototype.add = function(item) {
  if (typeof item === 'string') {
    this._storage[`"${item}"`] = item;
  } else {
    this._storage[JSON.stringify(item)] = item;
  }
};

// Checks to see if set contains item
setPrototype.contains = function(item) {
  if (typeof item === 'string') {
    return `"${item}"` in this._storage;
  } else {
    return JSON.stringify(item) in this._storage;
  }
};

// Removes set from item
setPrototype.remove = function(item) {
  if (typeof item === 'string') {
    delete this._storage[`"${item}"`];
  } else {
    delete this._storage[JSON.stringify(item)];
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
