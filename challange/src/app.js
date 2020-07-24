
//requirements
const Parse = require('parse/node');
require('dotenv').config();


//connecting to server
Parse.initialize(process.env.APP_ID, process.env.JAVASCRIPT_KEY);
Parse.serverURL = "https://parseapi.back4app.com/";

//testing querie
const Film = Parse.Object.extend("Film");
const query = new Parse.Query(Film);


const requestData = async (query) => {
  const response = await query.find();
  return response; 
}

requestData(query).then(response =>{

  for(let aux = 0; aux < response.length; aux++ ){
    let object = response[aux];
    console.log(object.get('title'));
  }
  
})