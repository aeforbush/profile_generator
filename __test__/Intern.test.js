const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UMO";
  const e = new Intern("Bob", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should retrun  'Intern'", () => {
  const testValue = "Intern";
  const e = new Intern("Bob", 1, "test@test.com", "UMF");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UMA";
  const e = new Intern("Bob", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
