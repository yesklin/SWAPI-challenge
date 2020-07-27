
const biggerPlanetQuery = async (Parse) =>  {

  const Planet = Parse.Object.extend("Planet");
  const query = new Parse.Query(Planet);
  query.descending("population");
  const response = await query.find();
  const mostPopulatedPlanet = response[0];

  const Character = Parse.Object.extend("Character");
  const charQuery = new Parse.Query(Character);
  charQuery.equalTo("homeworld", mostPopulatedPlanet);
  return await charQuery.count();

}

exports.modules = biggerPlanetQuery;
