class Gameboard {
  constructor(rows = 10, cols = 10) {
    this.rows = rows;
    this.cols = cols;
    this.board = this.createBoard();
  }

  createBoard() {
    const board = new Array(this.rows * this.cols).fill(null).map((_, i) => ({
      index: i,
      cell: this.indexToCell(i),
      ship: null,
      isHit: false,
    }));
    return board;
  }

  indexToCell(index) {
    const row = Math.floor(index / this.cols) + 1;
    const col = String.fromCharCode(65 + (index % this.cols));
    return `${row}${col}`;
  }

  cellToIndex(cell) {
    const row = parseInt(position.slice(0, -1)) - 1;
    const col = position.slice(-1).charCodeAt(0) - 65;
    return row * this.cols + col;
  }
}

export default Gameboard;
