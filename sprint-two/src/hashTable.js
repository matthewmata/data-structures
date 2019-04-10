

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let tuple = [k, v]
  let storage = this._storage.get(index);
  if (storage !== undefined) {
    for(let toop of storage) {
      if (toop[0] === k) {
        toop[1] = v;
        return;
      }
    } 
    this._storage.get(index).push(tuple);
  } else {
    this._storage.set(index, [tuple]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let storage = this._storage.get(index);
  for (let tuple of storage) {
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let storage = this._storage.get(index);
  for(let i = 0; i < storage.length; i++) {
    if (storage[i][0] === k) {
      storage.splice(i, 1);
    }
  } 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


