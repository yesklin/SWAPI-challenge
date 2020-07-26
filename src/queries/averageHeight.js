const averageHeightQuery = async (Parse) => {  
  const Character = Parse.Object.extend("Character"); //extending class
  const query = new Parse.Query(Character); // creating query
  query.select("height")
  .greaterThan("height", 0)
  .limit(5000);

  return await query.find();
}

exports.modules = averageHeightQuery;