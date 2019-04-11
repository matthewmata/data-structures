
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let tuple = [k, v]
  let storage = this._storage.get(index);
  if (storage !== undefined) {
    for(let toop of storage) {
      // rewrites if key already exists
      if (toop[0] === k) {
        toop[1] = v;
        this._counter++
        return;
      }
    } 
    // if a bucket already exists
    this._storage.get(index).push(tuple);
    this._counter++
  } else {
    // creates a bucket for future tuples
    this._storage.set(index, [tuple]);
    this._counter++
  }
  // resizing hashTable if table is 75% full
  if (this._counter / this._limit >= 0.75) {
    let saved = [];
    this._storage.each((bucket) =>{
      if (bucket) {
        for (let resizedTuple of bucket) {
          saved.push(resizedTuple);
          this.remove(resizedTuple[0]);
        }
      }
    })
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);
    for(let toop of saved) {
      this.insert(toop[0], toop[1]);
    }
    console.log(this._storage.checkContents())
    console.log('resized table by double');
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
  if (storage) {
    for(let i = 0; i < storage.length; i++) {
      if (storage[i][0] === k) {
        storage.splice(i, 1);
        this._counter--;
      }
    }
  }
  //resizing down
  if (this._counter / this._limit <= 0.25 && this._limit > 8) {
    let saved = [];
    this._storage.each((bucket) =>{
      if (bucket) {
        for (let resizedTuple of bucket) {
          saved.push(resizedTuple);
          this.remove(resizedTuple[0]);
        }
      }
    })
    this._limit /= 2;
    this._storage = LimitedArray(this._limit);
    for(let toop of saved) {
      this.insert(toop[0], toop[1]);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


