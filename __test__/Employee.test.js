const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("Can create employee", () => {
    const e = new Employee();
    expect(typeof e).toBe("object");
  });

  it("Can set name via constructor arguments", () => {
    const name = "Ida";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });

  it("Can set id via constructor argument", () => {
    const testValue = 50;
    const e = new Employee("Ida", testValue);
    expect(e.id).toBe(testValue);
  });

  it("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });

  describe("getName", () => {
    it("Can get name via getName()", () => {
      const testValue = "Ida";
      const e = new Employee(testValue);
      expect(e.getName()).toBe(testValue);
    });
  });
  describe("getId", () => {
    it("Can get id via getId()", () => {
      const testValue = 50;
      const e = new Employee("Ida", testValue);
      expect(e.getId()).toBe(testValue);
    });
  });

  describe("getEmail", () => {
    if (
      ("Can get email via getEmail()",
      () => {
        const testValue = "test@test.com";
        const e = new Employee("Ida", 1, testValue);
        expect(e.getEmail()).toBe(testValue);
      })
    );
  });

  describe("getRole", () => {
    it("Can get role via getRole()", () => {
      const testValue = "Employee";
      const e = new Employee("Ida", 1, "test@test.com");
      expect(e.getRole()).toBe(testValue);
    });
  });
});
