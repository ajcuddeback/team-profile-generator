const { test, expect } = require("@jest/globals")
const Manager = require("../lib/Manager")

test('creates manager object', () => {
    manager = new Manager('AJ', '25', 'ajcuddeback@gmail.com', '52');

    expect(manager.name).toBe('AJ');
    expect(manager.id).toBe('25');
    expect(manager.email).toBe('ajcuddeback@gmail.com');
    expect(manager.officeNumber).toBe('52');
});

test('gets managers office number', () => {
    manager = new Manager('AJ', '25', 'ajcuddeback@gmail.com', '52');

    expect(manager.getOfficeNumber()).toBe('Office Number: 52');
});

test('gets managers role', () => {
    manager = new Manager('AJ', '25', 'ajcuddeback@gmail.com', '52');

    expect(manager.getRole()).toBe("Role: Manager")
})
