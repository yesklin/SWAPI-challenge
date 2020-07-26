
const mortalSpeciesQuery = async (Parse) => {
  const Specie = Parse.Object.extend("Specie"); //extending class
  const query = new Parse.Query(Specie); // creating query
  query.select("name", "averageLifespan")
  .greaterThan("averageLifespan", 0)
  .ascending("averageLifespan");//constrains
  
  const response = await query.find();
  return response;
}




exports.modules = mortalSpeciesQuery;