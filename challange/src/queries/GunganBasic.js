
class GunganBasic{

  constructor(Parse)
  {
    this.Parse = Parse;
  }

  request = async () => {
    const Specie = this.Parse.Object.extend("Specie");
    const Character = this.Parse.Object.extend("Character");
    const innerQuery = new this.Parse.Query(Specie);
    innerQuery.equalTo("name","Gungan");
    const query = new this.Parse.Query(Character);
    query.matchesQuery("species", innerQuery);
    // comments now contains the comments for posts with images.
    const result = await query.find();
    const returnable = [];

    result.forEach(element => {
      returnable.push(element.get('name'));
    })

    return returnable;
  }

}

exports.modules = GunganBasic;