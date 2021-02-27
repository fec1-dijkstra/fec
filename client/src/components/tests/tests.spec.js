/* eslint-disable no-undef */
describe('Test function', () => {
  const testFunc = () => 1;

  test('test function should be defined', () => {
    expect(testFunc).toBeDefined();
  });

  test('test function should return 1', () => {
    const output = 1;

    expect(testFunc()).toEqual(output);
  });
});
