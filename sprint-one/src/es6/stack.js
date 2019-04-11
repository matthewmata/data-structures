class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
  }

  push(value) {
    this.storage[this.counter] = value;
    this.counter++;
  };
  
  pop() {
    if (this.counter > 0) {
      this.counter--;
    }
    let popped = this.storage[this.counter];
    delete this.storage[this.counter];
    return popped;
  }
  
  size() {
    return this.counter;
  }
}