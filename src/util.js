
const averageHeightQuery = require('./queries/averageHeight').modules;
const findAverageHeight = async (Parse) => { //recieves an array objects and return the average of its attribute: 'height'.
  try {
    const heights = await averageHeightQuery(Parse);
    
    let sum = 0;
    let count = 0;

    heights.forEach(object => {
      sum = sum + object.get("height");
      count++;
    });

    return ((sum/count)/100).toFixed(3);
  }
  catch (err) {
    console.log(err);
  }
}




const mortalSpeciesQuery = require('../src/queries/mortalSpecies').modules;
const findMortalSpecies = async(Parse) => { //recieves an array of objects and finds the smallest average lifespans and returns its names.

  try {
    const response = await mortalSpeciesQuery(Parse);

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

exports.modules = {findAverageHeight, findMortalSpecies};

