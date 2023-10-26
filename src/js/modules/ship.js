class Ship {
  constructor(length) {
    if (length < 0) {
      throw new Error("Ship length cannot be negative.");
    }
    this.length = length;
    this.numHits = 0;
  }

  isSunk() {
    return this.numHits === this.length;
  }

  hit() {
    if (!this.isSunk()) {
      this.numHits++;
    } else {
      throw new Error("The ship is already sunk.");
    }
  }
}

export default Ship;
