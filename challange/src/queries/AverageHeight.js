const Parse = require('parse/node');

class AverageHeight {
    
  queryIt = async () => {
    const Character = Parse.Object.extend("Character"); //extending class
    const query = new Parse.Query(Character); // creating query
    query.select("height")
    .greaterThan("height", 0)
    .limit(5000);

    const response = await query.find();
    return response;
  }

  request = async() => { //finds the smallest average lifespans and returns its names.

    try {

      const heights = await this.queryIt();
      
      let sum = 0;
      let count = 0;

      heights.forEach(object => {
        sum = sum + object.get("height");
        count++;
      });

      return ((sum/count)/100).toFixed(3);

    }
    catch (err) {
      console.log(err);
    }
  }

}

exports.modules = AverageHeight;