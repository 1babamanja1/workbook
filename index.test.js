let { sum } = require("./index");

test("Returns sum of two values", () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
});
