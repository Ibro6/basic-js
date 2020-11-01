const chainMaker = {
  array: [],

  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number" || !Number.isInteger(position)) {
      this.array = [];
      throw new Error("Error");
    }
    if (position < 1 || position > this.array.length) {
      this.array = [];
      throw new Error("Error");
    }
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let chainArray = this.array.slice();
    this.array = [];
    return chainArray.join("~~");
  }
};

module.exports = chainMaker;
