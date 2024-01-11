class Gameboard {
  constructor(rows = 10, cols = 10) {
    this.rows = rows;
    this.cols = cols;
    this.board = this.createBoard();
  }

  createBoard() {
    const gameBoard = [];
    for (let i = 0; i < this.rows; i++) {
      gameBoard[i] = [];
      for (let j = 0; j < this.cols; j++) {
        gameBoard[i][j] = {
          row: String.fromCharCode(i + 65),
          col: j,
          index: 10 * i + j,
          cell: `${String.fromCharCode(i + 65)}${j + 1}`,
          status: null,
        };
      }
    }
    return gameBoard;
  }

  placeShip(ship, index, orientation) {
    // Check valid index
    if (index < 0 || index > 99) {
      console.error("Error");
      return;
    }

    let len = ship.length;

    // Horizontal Placement

    // Vertical Placement
  }
}

export default Gameboard;
