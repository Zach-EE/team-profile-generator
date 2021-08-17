const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern');
test('Can set school  via constructor arg', () => {
  const testValue = 'Phoenix Online';
  const e = new Intern('Frank the Tank','123','test@gmail.com', testValue);
  expect(e.school).toBe(testValue);
});

test('Can get school via getSchool()', () => {
  const testValue = 'Phoenix Online';
  const e = new Intern('Frank the tank', '123', 'test@gmail.com', testValue);
  expect(e.getSchool()).toBe(testValue);
});

// test('Can get "Intern" via getRole()', () => {
//     const testValue = 'Intern';
//     const e = new Intern('Frank the tank', '123', 'test@gmail.com', 'testUserName');
//     expect(e.getRole()).toBe(testValue);
//   });