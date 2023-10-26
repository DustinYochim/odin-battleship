import ship from "../src/js/modules/ship";

test("ship.length correctly returns ships size", () => {
  const carrier = ship(5);
  expect(carrier.length).toBe(5);
});

test("ship.numHits correctly returns ships number of hits", () => {
  const carrier = ship(5);
  expect(carrier.numHits).toBe(0);
  carrier.hit();
  expect(carrier.numHits).toBe(1);
  carrier.hit();
  expect(carrier.numHits).toBe(2);
  carrier.hit();
  expect(carrier.numHits).toBe(3);
});

test("ship.isSunk correctly returns ships sunk status", () => {
  const carrier = ship(5);
  expect(carrier.isSunk()).toBe(false);
  carrier.hit();
  expect(carrier.isSunk()).toBe(false);
  carrier.hit();
  expect(carrier.isSunk()).toBe(false);
  carrier.hit();
  expect(carrier.isSunk()).toBe(false);
  carrier.hit();
  expect(carrier.isSunk()).toBe(false);
  carrier.hit();
  expect(carrier.isSunk()).toBe(true);
});
