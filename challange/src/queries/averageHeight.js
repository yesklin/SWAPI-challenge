
const averageHeightQuery = async (Parse) => {
    const Character = Parse.Object.extend("Character"); //extending class
    const query = new Parse.Query(Character); // creating query
    query.select("height")
    .greaterThan("height", 0)
    .limit(5000);
  
    const response = await query.find();
    return response;
}
  
const findAverageHeight = async(Parse) => { //finds the average height of the characters
  
    try {
  
      const heights = await averageHeightQuery(Parse);
      
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

exports.modules = findAverageHeight;



