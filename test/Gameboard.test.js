import Gameboard from "../src/js/modules/gameboard";
import Ship from "../src/js/modules/Ship";

describe("Gameboard", () => {
  let gameboard;
  let ship;

  beforeAll(() => {
    /* Runs before all tests */
    // gameboard = new Gameboard();
    // ship = new Ship(3);
  });
  afterAll(() => {
    /* Runs after all tests */
  });
  beforeEach(() => {
    /* Runs before each test */
    gameboard = new Gameboard();
    ship = new Ship(3);
  });
  afterEach(() => {
    /* Runs after each test */
  });

  test("gameboard has 100 cells", () => {
    expect(gameboard.board.length).toEqual(10);
  });

  test("getCell returns correct row and column", () => {
    let targetCell = gameboard.board[0][0];
    expect(gameboard.getCell("1A")).toEqual(targetCell);

    targetCell = gameboard.board[9][9];
    expect(gameboard.getCell("10J")).toEqual(targetCell);
  });

  test("placeShip does not work with an invalid cell", () => {
    expect(gameboard.placeShip(ship, "horizontal", "1K")).toBe(undefined);
  });

  test("placeShip correctly places horizontal ship on valid cell", () => {
    gameboard.placeShip(ship, "horizontal", "1A");
    expect(gameboard.getCell("1A").status).toBe(ship);
    expect(gameboard.getCell("1B").status).toBe(ship);
    expect(gameboard.getCell("1C").status).toBe(ship);
  });

  test("placeShip correctly does not place horizontal ship on invalid cell", () => {
    gameboard.placeShip(ship, "horizontal", "1I");
    expect(gameboard.getCell("1I").status).toBe(null);
    expect(gameboard.getCell("1J").status).toBe(null);
  });

  test("placeShip correctly places vertical ship on valid cell", () => {
    gameboard.placeShip(ship, "vertical", "1A");
    expect(gameboard.getCell("1A").status).toBe(ship);
    expect(gameboard.getCell("2A").status).toBe(ship);
    expect(gameboard.getCell("3A").status).toBe(ship);
  });

  test("placeShip correctly does not place vertical ship on invalid cell", () => {
    gameboard.placeShip(ship, "horizontal", "1I");
    expect(gameboard.getCell("9A").status).toBe(null);
    expect(gameboard.getCell("10A").status).toBe(null);
  });

  test("receiveAttack correctly identifies and logs a miss", () => {
    gameboard.receiveAttack("1A");
    expect(gameboard.getCell("1A").status).toBe("miss");
  });

  test("receiveAttack correctly identifies and logs a hit", () => {
    gameboard.placeShip(ship, "horizontal", "1A");
    gameboard.receiveAttack("1A");
    expect(gameboard.getCell("1A").status.numHits).toBe(1);
    expect(gameboard.getCell("1B").status.numHits).toBe(1);
    expect(gameboard.getCell("1C").status.numHits).toBe(1);
  });

  test("Correctly reports when all ships are sunk", () => {
    gameboard.placeShip(ship, "horizontal", "1A");
    gameboard.receiveAttack("1A");
    gameboard.receiveAttack("1A");
    gameboard.receiveAttack("1A");
    expect(gameboard.checkIfAllShipsSunk()).toBe(true);
  });

  test("checkValidPlacement correctly reports valid placement", () => {
    gameboard.placeShip(ship, "horizontal", "5H");
    expect(gameboard.checkValidPlacement(ship, "horizontal", "5H")).toBe(true);
  });

  test("checkValidPlacement correctly reports invalid placement", () => {
    gameboard.placeShip(ship, "horizontal", "5H");
    expect(gameboard.checkValidPlacement(ship, "horizontal", "5I")).toBe(false);
  });
});
