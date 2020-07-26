
class FirstMovie{
  constructor(Parse){
    this.Parse = Parse;
  }

  request = async () => {
    const Film = this.Parse.Object.extend("Film"); //extending class
    const query = new this.Parse.Query(Film); // creating query
    query.select("title", "releaseDate").ascending(); //constrains
    const response = await query.find();
    const firstMovie = response[0];
    return firstMovie.get('title');
  }

}

exports.modules = FirstMovie;