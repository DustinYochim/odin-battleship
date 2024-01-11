import Ship from "./Ship";
import Gameboard from "./gameboard";

class Player {
  constructor(name = "Player 1") {
    this.ships = createShips();
    this.board = new Gameboard();
  }

  createShips() {
    const shipSizes = [5, 4, 3, 3, 2];
    const ships = [];
    for (const shipSize of shipSizes) {
      ships.push(new Ship(shipSize));
    }

    return ships;
  }

  randomAttack(board) {
    let row;
    let col;
    let cell;

    do {
      row = Math.floor(Math.random() * 10) + 1;
      col = Math.floor(Math.random() * 10) + 1;
      cell = `${row}${String.fromCharCode(col + 64)}`;
    } while (board.misses.includes(cell) || board.hits.includes(cell));

    board.receiveAttack(cell);
  }
}
