

const gunganBasicQuery = async (Parse) => {
  const Specie = Parse.Object.extend("Specie");
  const Character = Parse.Object.extend("Character");
  const innerQuery = new Parse.Query(Specie);
  innerQuery.equalTo("name","Gungan");
  const query = new Parse.Query(Character);
  query.matchesQuery("species", innerQuery);
  // comments now contains the comments for posts with images.
  return await query.find();

}


exports.modules = gunganBasicQuery;
