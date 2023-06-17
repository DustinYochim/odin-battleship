import createShip from "./Ship";

test("Create a ship object with a length", () => {
  const ship = createShip(4);
  expect(ship).toBeDefined();
  expect(ship.length).toBe(4);
});

test("A ship should start with 0 hits", () => {
  const ship = createShip(3);
  expect(ship.hits).toBe(0);
});

test("New ship is not sunk", () => {
  const ship = createShip(3);
  expect(ship.isSunk()).toBe(false);
});

test("Increase number of hits in a ship", () => {
  const ship = createShip(4);
  expect(ship.hits).toBe(0);

  ship.hit();
  expect(ship.hits).toBe(1);

  ship.hit();
  expect(ship.hits).toBe(2);

  ship.hit();
  expect(ship.hits).toBe(3);

  ship.hit();
  expect(ship.hits).toBe(4);
});

test("Verify if a ship i sunk", () => {
  const ship = createShip(3);
  expect(ship.isSunk()).toBe(false);

  ship.hit();
  expect(ship.isSunk()).toBe(false);

  ship.hit();
  expect(ship.isSunk()).toBe(false);

  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
