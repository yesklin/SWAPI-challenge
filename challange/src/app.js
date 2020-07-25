
//moduele requirements
const Parse = require('parse/node');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const FirstMovie = require('./queries/firstMovie').modules;
require('dotenv').config();

//imports 

//connecting to server
Parse.initialize(process.env.APP_ID, process.env.JAVASCRIPT_KEY);
Parse.serverURL = "https://parseapi.back4app.com/";



//resquesting data from server
(async = () => {

  const firstMovie = await FirstMovie.request();

})();