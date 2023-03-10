const Calculator = require("./calculator");

test("Basic calculator operations", () => {
    expect(Calculator.add(5,5)).toBe(10)
    expect(Calculator.subtract(5,8)).toBe(-3)
    expect(Calculator.multiply(0,56)).toBe(0)
    expect(Calculator.divide(25,25)).toBe(1)
    expect(Calculator.divide(5,0)).toStrictEqual(new Error("No dividing by 0!"))
})