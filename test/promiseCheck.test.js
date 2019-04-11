const promiseCheck = require('../promiseCheck');

describe('promise check tests', () => {
  it('pass a promise and expect it to return true', () => {
    const promise = new Promise(() => {});
    expect(promiseCheck(promise)).toBeTruthy();
  });
});
