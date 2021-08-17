const Employee = require('../lib/Employee');

describe('Employee', () => {
  it('Can instantiate Employee instance', () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
  });

  it('Can set name via constructor arg', () => {
    const testValue = 'Frank the Tank';
    const e = new Employee(testValue);
    expect(e.name).toBe(testValue);
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

describe('getName',() => {
  it('Can get name via getName()', () => {
    const testValue = 'Frank the Tank';
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });
});

describe('getName',() => {
  it('Can get id via getId()', () => {
    const testValue = '123';
    const e = new Employee('Frank the tank', testValue);
    expect(e.getId()).toBe(testValue);
  });
});