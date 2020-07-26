
//moduele requirements
const Parse = require('parse/node');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
require('dotenv').config();


//connecting to server
Parse.initialize(process.env.APP_ID, process.env.JAVASCRIPT_KEY);
Parse.serverURL = "https://parseapi.back4app.com/";
console.log(process.env.APP_ID);

//requiring queries
const FirstMovie = require('./queries/FirstMovie').modules;
const MortalSpecies = require('./queries/MortalSpecies').modules;
const CountGender = require('./queries/CountGender').modules;
const AverageHeight = require('./queries/AverageHeight').modules;
const GunganBasic = require('./queries/GunganBasic').modules;
const BiggerPlanet = require('./queries/BiggerPlanet').modules;


(async () => { //requesting data and creating csv file.

  console.log("O seu arquivo CSV está sendo criado");


  const firstMovie = await new FirstMovie(Parse).request();
  const mortalSpecies = await new MortalSpecies(Parse).request();
  const countGender = await new CountGender(Parse).request();
  const averageHeight = await new AverageHeight(Parse).request();
  const gunganBasic = await new GunganBasic(Parse).request();
  const biggerPlanet = await new BiggerPlanet(Parse).request();

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