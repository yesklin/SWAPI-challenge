const Parse = require('parse/node');



class BiggerPlanet{

  request = async () => {
    const Planet = Parse.Object.extend("Planet");
    const query = new Parse.Query(Planet);
    query.descending("population");
    const response = await query.find();
    const mostPopulatedPlanet = response[0];

    const Character = Parse.Object.extend("Character");
    const charQuery = new Parse.Query(Character);
    charQuery.equalTo("homeworld", mostPopulatedPlanet);
    const result  = await charQuery.find();

    const returnable = []

    result.forEach(element => {
      returnable.push(element.get('name'));
    });
  
    return returnable;
  }

}

exports.modules = BiggerPlanet;