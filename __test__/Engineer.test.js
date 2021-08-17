const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer');
test('Can set gitHub account via constructor arg', () => {
  const testValue = 'gitHubUser';
  const e = new Engineer('Frank the Tank','123','test@gmail.com', testValue);
  expect(e.github).toBe(testValue);
});

test('Can get gitHub User via getGithub()', () => {
  const testValue = 'testUserName';
  const e = new Engineer('Frank the tank', '123', 'test@gmail.com', testValue);
  expect(e.getGithub()).toBe(testValue);
});

test('Can get "Engineer" via getRole()', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Frank the tank', '123', 'test@gmail.com', 'testUserName');
    expect(e.getRole()).toBe(testValue);
  });