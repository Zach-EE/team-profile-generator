const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern');
test('Can set school  via constructor arg', () => {
  const testValue = 'Pheonix Online';
  const e = new Intern('Frank the Tank','123','test@gmail.com', testValue);
  expect(e.school).toBe(testValue);
});

// test('Can get school via getGithub()', () => {
//   const testValue = 'testUserName';
//   const e = new Intern('Frank the tank', '123', 'test@gmail.com', testValue);
//   expect(e.getGithub()).toBe(testValue);
// });

// test('Can get "Intern" via getRole()', () => {
//     const testValue = 'Intern';
//     const e = new Intern('Frank the tank', '123', 'test@gmail.com', 'testUserName');
//     expect(e.getRole()).toBe(testValue);
//   });