const Parse = require('parse/node');

class MortalSpecies {
  static request = async () => {
    const Specie = Parse.Object.extend('Specie');
    const query = new Parse.Query(Specie);
    query.select('averageLifespan', 'name')
  }
}