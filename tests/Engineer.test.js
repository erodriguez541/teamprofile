const Engineer = require("../lib/Engineer");

test("Can set GitHUb", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Test", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Test", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Test", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});