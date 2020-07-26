
//moduele requirements
const Parse = require('parse/node');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
require('dotenv').config();


//connecting to server
Parse.initialize(process.env.APP_ID, process.env.JAVASCRIPT_KEY);
Parse.serverURL = "https://parseapi.back4app.com/";
console.log(process.env.APP_ID);

//requiring queries
const findFirstMovie = require('./queries/firstMovie').modules;
const findMortalSpecies = require('./queries/mortalSpecies').modules;
const finCountGender = require('./queries/countGender').modules;
const findAverageHeight = require('./queries/averageHeight').modules;
const findGunganBasic = require('./queries/gunganBasic').modules;
const findBiggerPlanet = require('./queries/biggerPlanet').modules;


(async () => { //requesting data and creating csv file.

  console.log("O seu arquivo CSV está sendo criado");


  const firstMovie = await findFirstMovie(Parse);
  const mortalSpecies = await findMortalSpecies(Parse);
  const countGender = await finCountGender(Parse);
  const averageHeight = await findAverageHeight(Parse);
  const gunganBasic = await findGunganBasic(Parse);
  const biggerPlanet = await findBiggerPlanet(Parse);

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
      first: firstMovie,
      second: mortalSpecies,
      third: countGender,
      fourth: averageHeight,
      fiveth: gunganBasic,
      sixth: biggerPlanet
    }
  ];
  
  csvWriter.writeRecords(data)
  console.log("Seu arquivo CSV está disponível: gimme-star-wars/respostas.csv");


})();