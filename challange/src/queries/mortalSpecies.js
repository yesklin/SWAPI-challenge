const Parse = require('parse/node');

class MortalSpecies {
    
  queryIt = async () => {
    const Specie = Parse.Object.extend("Specie"); //extending class
    const query = new Parse.Query(Specie); // creating query
    query.select("name", "averageLifespan")
    .greaterThan("averageLifespan", 0)
    .ascending("averageLifespan");//constrains
    
    const response = await query.find();
    return response;
  }

  request = async() => { //finds the smallest average lifespans and returns its names.

    try {
      const response = await this.queryIt();

      const smallestAverageLifespan = response[0].get('averageLifespan');
      const names = [response[0].get('name')];

      for(let aux=1; aux<response.length; aux++){

        let currentAverageLifespan = response[aux].get('averageLifespan');

        if(currentAverageLifespan > smallestAverageLifespan)
          break;
        
        else if(currentAverageLifespan === smallestAverageLifespan)
          names.push(response[aux].get('name'));
      
      }

      return names;
    }
    catch (err) {
      console.log(err);
    }
  }



}

exports.modules = MortalSpecies;