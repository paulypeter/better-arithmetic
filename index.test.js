const betterArithmetic = require("./index");

test("Returns correct value for two positive integers.", () => {
    expect(betterArithmetic.add(10, 5)).toBe(15);
    expect(betterArithmetic.multiply(10, 5)).toBe(50);
    expect(betterArithmetic.div(10, 5)).toBe(2);
    expect(betterArithmetic.modulo(10, 5)).toBe(0);

    expect(betterArithmetic.add(33, 7)).toBe(40);
    expect(betterArithmetic.multiply(33, 7)).toBe(231);
    expect(betterArithmetic.div(33, 7)).toBe(4);
    expect(betterArithmetic.modulo(33, 7)).toBe(5);
});

test("Returns correct value for one positive and one negative integer.", () => {
    expect(betterArithmetic.add(10, -5)).toBe(5);
    expect(betterArithmetic.multiply(10, -5)).toBe(-50);
    expect(betterArithmetic.div(10, -5)).toBe(-2);
    expect(betterArithmetic.modulo(10, -5)).toBe(0);

    expect(betterArithmetic.add(33, -7)).toBe(26);
    expect(betterArithmetic.multiply(33, -7)).toBe(-231);
    expect(betterArithmetic.div(33, -7)).toBe(-5);
    expect(betterArithmetic.modulo(33, -7)).toBe(-2);

    expect(betterArithmetic.add(-10, 5)).toBe(-5);
    expect(betterArithmetic.multiply(-10, 5)).toBe(-50);
    expect(betterArithmetic.div(-10, 5)).toBe(-2);
    expect(betterArithmetic.modulo(-10, 5)).toBe(0);

    expect(betterArithmetic.add(-33, 7)).toBe(-26);
    expect(betterArithmetic.multiply(-33, 7)).toBe(-231);
    expect(betterArithmetic.div(-33, 7)).toBe(-5);
    expect(betterArithmetic.modulo(-33, 7)).toBe(2);
});

test("Returns correct value for two negative integers.", () => {
    expect(betterArithmetic.add(-10, -5)).toBe(-15);
    expect(betterArithmetic.multiply(-10, -5)).toBe(50);
    expect(betterArithmetic.div(-10, -5)).toBe(2);
    expect(betterArithmetic.modulo(-10, -5)).toBe(0);

    expect(betterArithmetic.add(-33, -7)).toBe(-40);
    expect(betterArithmetic.multiply(-33, -7)).toBe(231);
    expect(betterArithmetic.div(-33, -7)).toBe(4);
    expect(betterArithmetic.modulo(-33, -7)).toBe(-5);
});
