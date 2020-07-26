
class CountGender {
    
  constructor(Parse){
    this.Parse = Parse;
  }

  request = async () => {
    const Character = this.Parse.Object.extend("Character"); //extending class

    const maleQuery = new this.Parse.Query(Character); // creating query
    const femaleQuery = new this.Parse.Query(Character);

    maleQuery.equalTo('gender', 'male');
    femaleQuery.equalTo('gender', 'female');

    const males = await maleQuery.count();
    const females = await femaleQuery.count();
    

    return ["M:"+males, "F:"+females];
  }


}

exports.modules = CountGender;