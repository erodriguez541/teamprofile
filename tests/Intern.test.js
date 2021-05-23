const Intern = require("../lib/Intern");

test("Can set school", () => {
  const testValue = "KU bootcamp";
  const e = new Intern("test", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("test", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "KU bootcamp";
  const e = new Intern("test", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});