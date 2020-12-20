const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test('Creates new employee object', () => {
    const employee = new Employee('AJ', '25', 'ajcuddeback@gmail.com');

    expect(employee.name).toBe('AJ');
    expect(employee.id).toBe('25');
    expect(employee.email).toBe('ajcuddeback@gmail.com');
});

test('gets employees name', () => {
    const employee = new Employee('AJ', '25', 'ajcuddeback@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
})