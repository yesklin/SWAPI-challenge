const Parse = require('parse/node');

class CountGender {
    
  request = async () => {
    const Character = Parse.Object.extend("Character"); //extending class

    const maleQuery = new Parse.Query(Character); // creating query
    const femaleQuery = new Parse.Query(Character);

    maleQuery.equalTo('gender', 'male');
    femaleQuery.equalTo('gender', 'female');

    const males = await maleQuery.count();
    const females = await femaleQuery.count();
    

    return [males, females];
  }


}

exports.modules = CountGender;