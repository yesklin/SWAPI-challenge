jest.mock('../src/queries/averageHeight.js');
jest.mock('../src/queries/mortalSpecies.js');


const {findAverageHeight, findMortalSpecies} = require('../src/util').modules;


test('Should output the average of the heights', () => {
  findAverageHeight(null).then(response => {
    expect(response).toBe((1.8).toFixed(3));

  }).catch(err => {
    console.log(err);

  });
})

test('Should output the species with the smallest lifespans', () => {
  findMortalSpecies(null).then(response => {
    expect(response).toStrictEqual(['lion', 'eagle']);

  }).catch(err => {
    console.log(err);

  });
})


