
const averageHeightQuery = require('./queries/averageHeight').modules;
const findAverageHeight = async (Parse) => { //recieves an array objects and return the average of its attribute: 'height'.
  try {
    const heights = await averageHeightQuery(Parse);

    let sum = 0;

    heights.forEach(object => {
      sum = sum + object.get("height");
    });

    return ((sum/heights.length)/100).toFixed(3);
  }
  catch (err) {
    console.log(err);
  }
}




const mortalSpeciesQuery = require('../src/queries/mortalSpecies').modules;
const findMortalSpecies = async(Parse) => { //recieves an array of objects, finds the smallest average lifespans and returns its names.

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



const guganBasicQuery = require('./queries/gunganBasic').modules;
const findGunganBasic = async (Parse) => { //recieves an array of objects and return its names

  const response = await guganBasicQuery(Parse);
  const gunganBasicSpeakers = [];
  response.forEach(object => {
    gunganBasicSpeakers.push(object.get('name'));
  })

  return gunganBasicSpeakers;
}



const firstMovieQuery = require('./queries/firstMovie').modules;
const findFirstMovie = async (Parse) => {
  return await firstMovieQuery(Parse);
}



const countGenderQuery = require('./queries/countGender').modules;
const findCountGender = async (Parse) => {
  return await countGenderQuery(Parse);
}



const biggerPlanetQuery = require('./queries/biggerPlanet').modules;
const findBiggerPlanet = async (Parse) => { 
  return await biggerPlanetQuery(Parse);
}


exports.modules = {
  findAverageHeight,
  findMortalSpecies,
  findGunganBasic,
  findFirstMovie,
  findCountGender,
  findBiggerPlanet
};
