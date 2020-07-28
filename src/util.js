const createCsvWriter = require('csv-writer').createObjectCsvWriter;


const averageHeightQuery = require('./queries/averageHeight').modules;
const findAverageHeight = async (Parse) => { //recieves an array objects and return the average of its attribute: 'height'.
  try {
    const heights = await averageHeightQuery(Parse);

    let sum = 0;

    heights.forEach(object => {
      sum = sum + object.get("height");
    });

    return ((sum/heights.length)/100).toFixed(2);
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

const createCSVfile = async (answer1, answer2, answer3, answer4, answer5, answer6) => {
  const csvWriter = createCsvWriter({
    path: 'respostas.csv',
    header: [
      {id: 'first', title: 'Pergunta 1'},
      {id: 'second', title: 'Pergunta 2'},
      {id: 'third', title: 'Pergunta 3'},
      {id: 'fourth', title: 'Pergunta 4'},
      {id: 'fiveth', title: 'Pergunta 6'},
      {id: 'sixth', title: 'Pergunta 6'}
    ],
    fieldDelimiter: ";"
  });

  const data = [
    {
      first: answer1,
      second: answer2,
      third: answer3,
      fourth: answer4,
      fiveth: answer5,
      sixth: answer6
    }
  ];

  csvWriter.writeRecords(data)
}


exports.modules = {
  findAverageHeight,
  findMortalSpecies,
  findGunganBasic,
  findFirstMovie,
  findCountGender,
  findBiggerPlanet,
  createCSVfile
};
