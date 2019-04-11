const promiseCheck = require('../promiseCheck');

describe('promise check tests', () => {
  it('pass a promise and expect it to return true', () => {
    const promise = new Promise(() => {});
    expect(promiseCheck(promise)).toBeTruthy();
  });
  it('pass not a promise and expect it to return false', () => {
    const notAPromise = 1;
    expect(promiseCheck(notAPromise)).toBeFalsy();
  });
  it('pass not a promise and expect it to return false', () => {
    const notAPromise = {
      then: () => {}
    };
    expect(promiseCheck(notAPromise)).toBeFalsy();
  });
});
