const Engineer = require("../lib/Engineer");

test("Can set GitHub acount via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Sally", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});

test("getRole() should return \'Engineer\'", () => {
    const testValue = "Engineer";
    const e = new Engineer("Sally", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Sally", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});