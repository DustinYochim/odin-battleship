import Ship from "../src/js/modules/Ship";

describe("Ship", () => {
  test("should initialize a ship with the correct length and numHits", () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
    expect(ship.numHits).toBe(0);
  });

  test("should throw an error when initializing with a negative length", () => {
    expect(() => new Ship(-2)).toThrow();
  });

  test("should correctly check if a ship is sunk", () => {
    const ship = new Ship(3);
    expect(ship.isSunk()).toBe(false);

    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test("should throw an error when hitting a sunken ship", () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    expect(() => ship.hit()).toThrow();
  });

  test("should increment numHits when hit", () => {
    const ship = new Ship(4);
    ship.hit();
    expect(ship.numHits).toBe(1);
    ship.hit();
    expect(ship.numHits).toBe(2);
  });
});
