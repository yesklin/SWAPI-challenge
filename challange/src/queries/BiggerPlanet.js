
class BiggerPlanet{


  constructor(Parse)
  {
    this.Parse = Parse;
  }

  request = async () => {
    const Planet = this.Parse.Object.extend("Planet");
    const query = new this.Parse.Query(Planet);
    query.descending("population");
    const response = await query.find();
    const mostPopulatedPlanet = response[0];

    const Character = this.Parse.Object.extend("Character");
    const charQuery = new this.Parse.Query(Character);
    charQuery.equalTo("homeworld", mostPopulatedPlanet);
    return await charQuery.count();

  }

}

exports.modules = BiggerPlanet;