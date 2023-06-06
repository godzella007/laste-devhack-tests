// example.test.js

const assert = require('assert');

describe('Example Test Suite', () => {
  it('should return true', () => {
    assert.strictEqual(2 + 2, 4);
  });

  it('should perform async operation', (done) => {
    setTimeout(() => {
      assert.strictEqual(3 * 3, 9);
      done();
    }, 1000);
  });
});
