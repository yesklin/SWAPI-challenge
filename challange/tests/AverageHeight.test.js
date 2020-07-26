


const {AverageHeight} = require('../src/queries/AverageHeight');

test('Should output the average of entry', () => {
  const numbers = [3,4,5];
  const average = new AverageHeight().queryIt();
  expect(average).toBe(4);
})