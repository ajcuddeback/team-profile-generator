const { test, expect } = require("@jest/globals")
const Intern = require("../lib/Intern")

test('creates intern object', () => {
    const intern = new Intern('ajcuddeback', 'AJ', '25', 'UCF');

    expect(intern.name).toBe('AJ');
    expect(intern.id).toBe('25');
    expect(intern.email).toBe('ajcuddeback@gmail.com');
    expect(intern.school).toBe('UCF');
});

test('gets the interns school', () => {
    const intern = new Inter('ajcuddeback', 'AJ', '25', 'UCF');

    expect(intern.getSchool()).toBe('School: UCF');
});

test('gets the interns role', () => {
    const intern = new Intern('ajcuddeback', 'AJ', '25', 'UCF');

    expect(intern.getRole()).toBe('Role: Intern');
});