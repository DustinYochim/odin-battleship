export default function createShip(length) {
  return {
    length,
    hits: 0,
    isSunk() {
      if (this.hits >= this.length) {
        return true;
      }
      return false;
    },
    hit() {
      this.hits += 1;
    },
  };
}
