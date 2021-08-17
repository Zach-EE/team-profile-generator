const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');
test('Can set office#  via constructor arg', () => {
  const testValue = '555-867-5309';
  const e = new Manager('Frank the Tank','123','test@gmail.com', testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('Can get school via getOfficeNumber()', () => {
  const testValue = '555-867-5309';
  const e = new Manager('Frank the tank', '123', 'test@gmail.com', testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});

test('Can get "Intern" via getRole()', () => {
    const testValue = 'Manager';
    const e = new Manager('Frank the tank', '123', 'test@gmail.com', 'Phoenix Online');
    expect(e.getRole()).toBe(testValue);
  });