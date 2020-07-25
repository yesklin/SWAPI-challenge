
//moduele requirements
const Parse = require('parse/node');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
require('dotenv').config();


//connecting to server
Parse.initialize(process.env.APP_ID, process.env.JAVASCRIPT_KEY);
Parse.serverURL = "https://parseapi.back4app.com/";


//requiring queries
const FirstMovie = require('./queries/FirstMovie').modules;
const MortalSpecies = require('./queries/MortalSpecies').modules;
const CountGender = require('./queries/CountGender').modules;

(async () => {
  const firstMovie = await new FirstMovie().request();
  const mortalSpecies = await new MortalSpecies().request();
  const countGender = await new CountGender().request();

})();