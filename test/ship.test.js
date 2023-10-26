import ship from "../src/js/modules/ship";

test("ship.length correctly returns ships size", () => {
  const carrier = ship(5);
  expect(carrier.length).toBe(5);
});
