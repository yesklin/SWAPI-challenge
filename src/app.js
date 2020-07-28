
//moduele requirements
const Parse = require('parse/node');
require('dotenv').config();


//connecting to server
Parse.initialize(process.env.APP_ID, process.env.JAVASCRIPT_KEY);
Parse.serverURL = "https://parseapi.back4app.com/";

//requiring util
const {
  findAverageHeight,
  findMortalSpecies,
  findFirstMovie,
  findCountGender,
  findGunganBasic,
  findBiggerPlanet,
  createCSVfile
} = require('./util').modules;




(async () => { //requesting data and creating csv file.

  console.log("> Your csv file is being created. Pleas wait a moment");

  const firstMovie = await findFirstMovie(Parse);
  const mortalSpecies = await findMortalSpecies(Parse);
  const countGender = await findCountGender(Parse);
  const averageHeight = await findAverageHeight(Parse);
  const gunganBasic = await findGunganBasic(Parse);
  const biggerPlanet = await findBiggerPlanet(Parse);

  await createCSVfile(firstMovie, mortalSpecies, countGender, averageHeight,gunganBasic,biggerPlanet);

  console.log("> You csv file is ready and avaliable at: ./respostas.csv");

})();
