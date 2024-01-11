class Gameboard {
  constructor(rows = 10, cols = 10) {
    this.rows = rows;
    this.cols = cols;
    this.board = this.createBoard();
    this.misses = [];
    this.hits = [];
    // console.log(this.board);
  }

  createBoard() {
    const gameBoard = [];
    for (let i = 0; i < this.rows; i++) {
      gameBoard[i] = [];
      for (let j = 0; j < this.cols; j++) {
        gameBoard[i][j] = {
          row: i + 1,
          col: j + 1,
          index: 10 * i + j,
          cell: `${i + 1}${String.fromCharCode(j + 65)}`,
          status: null,
        };
      }
    }
    return gameBoard;
  }

  getCell(cell) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.board[i][j].cell === cell) {
          return this.board[i][j];
        }
      }
    }
    return null;
  }

  placeShip(ship, orientation, cell) {
    // Check valid cell
    if (!this.getCell(cell)) {
      // console.error(`Error finding cell ${cell}`);
      return;
    }

    let len = ship.length;
    let startingCell = this.getCell(cell);
    let startingRow = startingCell.row;
    let startingCol = startingCell.col;

    // Horizontal Placement
    if (orientation === "horizontal") {
      if (startingCol + len - 1 <= this.cols) {
        for (let i = 0; i < len; i++) {
          this.getCell(
            `${startingRow}${String.fromCharCode(startingCol + i + 65 - 1)}`
          ).status = ship;
        }
      }
      // Vertical Placement
    } else if (orientation === "vertical") {
      if (startingRow + len - 1 <= this.rows) {
        for (let i = 0; i < len; i++) {
          this.getCell(
            `${startingRow + i}${String.fromCharCode(startingCol + 65 - 1)}`
          ).status = ship;
        }
      }
    }
  }

  receiveAttack(cell) {
    let currentCell = this.getCell(cell);

    if (currentCell) {
      // Misses
      if (currentCell.status === null) {
        currentCell.status = "miss";
        this.misses.push(currentCell.cell);
      } else if (currentCell.status === "miss") {
        console.error("Cell already is a miss");
      } else {
        this.hits.push(currentCell.cell);
        currentCell.status.hit();
      }
    }
  }

  checkValidPlacement(ship, orientation, cell) {
    // Check valid cell
    if (!this.getCell(cell)) {
      return false;
    }

    let len = ship.length;
    let startingCell = this.getCell(cell);
    let startingRow = startingCell.row;
    let startingCol = startingCell.col;

    // Horizontal Placement
    if (orientation === "horizontal") {
      if (startingCol + len - 1 <= this.cols) {
        return true;
      } else {
        return false;
      }
      // Vertical Placement
    } else if (orientation === "vertical") {
      if (startingRow + len - 1 <= this.rows) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  checkIfAllShipsSunk() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (
          this.board[i][j].status !== null &&
          this.board[i][j].status !== "miss"
        ) {
          if (!this.board[i][j].status.isSunk()) {
            return false;
          }
        }
      }
    }
    return true;
  }
}

export default Gameboard;
