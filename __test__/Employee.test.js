const Employee = require('../lib/Employee');

describe('Employee', () => {
  it('Can instantiate Employee instance', () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
  });

  it('Can set name via constructor arg', () => {
    const name = 'Frank the Tank';
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });

  it('Can set id  via constructor arg', () => {
    const testValue = '123';
    const e = new Employee('Frank the tank', testValue);
    expect(e.id).toBe(testValue);
  });

  it('Can set email via constructor arg', () => {
    const testValue = 'test@gmail.com';
    const e = new Employee('Frank the tank', '123', testValue);
    expect(e.email).toBe(testValue);
  });
});