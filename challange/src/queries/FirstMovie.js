const Parse = require('parse/node');



class FirstMovie{

  request = async () => {
    const Film = Parse.Object.extend("Film"); //extending class
    const query = new Parse.Query(Film); // creating query
    query.select("title", "releaseDate").ascending(); //constrains
    const response = await query.find();
    const firstMovie = response[0];
    return firstMovie;
  }

}

exports.modules = FirstMovie;