

const findGunganBasic = async (Parse) => {
  const Specie = Parse.Object.extend("Specie");
  const Character = Parse.Object.extend("Character");
  const innerQuery = new Parse.Query(Specie);
  innerQuery.equalTo("name","Gungan");
  const query = new Parse.Query(Character);
  query.matchesQuery("species", innerQuery);
  // comments now contains the comments for posts with images.
  const result = await query.find();
  const returnable = [];

  result.forEach(element => {
    returnable.push(element.get('name'));
  })

  return returnable;
}


exports.modules = findGunganBasic;