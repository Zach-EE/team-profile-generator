const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer');
test('Can set gitHub account via constructor arg', () => {
  const testValue = 'gitHubUser';
  const e = new Engineer('Frank the Tank','123','test@gmail.com', testValue);
  expect(e.github).toBe(testValue);
})