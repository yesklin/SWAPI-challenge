


const firstMovieQuery = async (Parse) => {
  const Film = Parse.Object.extend("Film"); //extending class
  const query = new Parse.Query(Film); // creating query
  query.select("title", "releaseDate").ascending('releaseDate'); //constrains
  const response = await query.find();
  const firstMovie = response[0];
  return firstMovie.get('title');
  }



exports.modules = firstMovieQuery;