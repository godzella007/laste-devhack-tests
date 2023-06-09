const assert = require('assert');

const runTests = async () => {
  try {
    assert.strictEqual(2 + 2, 4);
    await performAsyncOperation();
    console.log('All tests passed!');
  } catch (error) {
    console.error('Test failed:', error);
  }
};

const performAsyncOperation = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      try {
        assert.strictEqual(3 * 3, 9);
        resolve();
      } catch (error) {
        console.error('Test failed:', error);
        resolve();
      }
    }, 1000);
  });
};

runTests();
