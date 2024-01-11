import Gameboard from "../src/js/modules/gameboard";
import Ship from "../src/js/modules/Ship";

describe("Gameboard", () => {
  let gameboard;

  beforeAll(() => {
    /* Runs before all tests */
    gameboard = new Gameboard();
  });
  afterAll(() => {
    /* Runs after all tests */
  });
  beforeEach(() => {
    /* Runs before each test */
  });
  afterEach(() => {
    /* Runs after each test */
  });

  test("gameboard has 100 cells", () => {
    expect(gameboard.board.length).toEqual(10);
  });
});
