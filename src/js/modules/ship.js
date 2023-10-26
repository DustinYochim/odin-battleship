export default function ship(length) {
  return {
    length,
    numHits: 0,
    isSunk() {
      return this.numHits === this.length;
    },
    hit() {
      this.numHits++;
    },
  };
}
