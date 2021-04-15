const { checkName } = require('../src/functions/functions');

let tryTest = function(input, action = true) {
  const name = input;
  const check = checkName(name);
  action ? expect(check).toBe(name) : expect(check).toBe('guess');
}

describe("Tests for checkName", () => {
  test("'Carlos' should return 'Carlos'", () => {
    tryTest('Carlos');
  });

  test("'3' should return '3'", () => {
    tryTest('3');
  });

  test("3 should retrun guess", () => {
    tryTest(3, false);
  });

  test("false should retrun guess", () => {
    tryTest(3, false);
  });

  test("object should retrun guess", () => {
    tryTest({3: "3"}, false);
  })
})