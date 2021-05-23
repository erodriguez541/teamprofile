const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name", () => {
  const name = "Michael Scott";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id", () => {
  const testValue = 100;
  const e = new Employee("Michael Scott", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email", () => {
  const testValue = "michaelscott@dundermifflin.com";
  const e = new Employee("Michael Scott", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name getName()", () => {
  const testValue = "Michael Scott";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Michael Scott", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "michaelscott@dundermifflin.com";
  const e = new Employee("Michael Scott", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});