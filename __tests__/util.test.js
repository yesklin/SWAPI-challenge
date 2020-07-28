jest.mock('../src/queries/averageHeight.js');
jest.mock('../src/queries/mortalSpecies.js');
jest.mock('../src/queries/gunganBasic.js');



const {findAverageHeight, findMortalSpecies,findGunganBasic} = require('../src/util').modules;


describe('Utils test', () => {
  
  it('Should output the average of the heights', () => {
    findAverageHeight(null).then(response => {
      expect(response).toBe((1.8).toFixed(2));
  
    }).catch(err => {
      console.log(err);
  
    });
  })
  
  it('Should output the species with the smallest lifespans', () => {
    findMortalSpecies(null).then(response => {
      expect(response).toStrictEqual(['lion', 'eagle']);
  
    }).catch(err => {
      console.log(err);
  
    });
  })
  
  it('Should output gungan basic speakers', () => {
    findGunganBasic(null).then(response => {
      expect(response).toStrictEqual(['Carlos', 'João', 'Maria']);
  
    }).catch(err => {
      console.log(err);
  
    });
  })
  
})

