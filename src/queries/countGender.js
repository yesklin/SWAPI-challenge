

const countGenderQuery = async (Parse) => {
  const Character = Parse.Object.extend("Character"); //extending class

  const maleQuery = new Parse.Query(Character); // creating query
  const femaleQuery = new Parse.Query(Character);

  maleQuery.equalTo('gender', 'male');
  femaleQuery.equalTo('gender', 'female');

  const males = await maleQuery.count();
  const females = await femaleQuery.count();


  return ["M:"+males, "F"+females];
}



exports.modules = countGenderQuery;
