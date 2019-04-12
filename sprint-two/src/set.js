var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (typeof item === 'string') {
  this._storage[item] = item;
  } else {
    this._storage[JSON.stringify(item)] = item;
  }
};

setPrototype.contains = function(item) {
  if (typeof item === 'string') {
    return this._storage[item] !== undefined
  } else {
    return this._storage[JSON.stringify(item)] !== undefined;
  }
};

setPrototype.remove = function(item) {
  if (typeof item === 'string') {
    delete this._storage[item]
  } else {
    delete this._storage[JSON.stringify(item)];
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
