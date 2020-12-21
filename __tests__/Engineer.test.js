const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test('Creates enginineer object', () => {
    const engineer = new Engineer('AJ', '25', 'ajcuddeback@gmail.com', 'ajcuddeback',);

    expect(engineer.name).toBe('AJ');
    expect(engineer.id).toBe('25');
    expect(engineer.email).toBe('ajcuddeback@gmail.com');
    expect(engineer.github).toBe('ajcuddeback');
});

test('gets engineers github', () => {
    const engineer = new Engineer('ajcuddeback');

    expect(engineer.getGithub()).toBe('https://github.com/ajcuddeback/')
})

test('gets role of engineer', () => {
    const engineer = new Engineer('ajcuddeback');

    expect(engineer.getRole()).toBe('Role: Engineer');
});