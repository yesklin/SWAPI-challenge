const mortalSpeciesQuery = async (Parse) => {

  const func = (type) => {
    if(type==='name')
      return this.name;
    else if(type==='averageLifespan')
      return this.averageLifespan;
  }

  return [
    {
      name: 'lion',
      averageLifespan: 20,
      get: function(type){
        if(type==='name')
          return this.name;
        else if(type==='averageLifespan')
          return this.averageLifespan;
      }
    },
    {
      name: 'eagle',
      averageLifespan: 20,
      get: function(type){
        if(type==='name')
          return this.name;
        else if(type==='averageLifespan')
          return this.averageLifespan;
      }
    },
    {
      name: 'crocodile',
      averageLifespan: 30,
      get: function(type){
        if(type==='name')
          return this.name;
        else if(type==='averageLifespan')
          return this.averageLifespan;
      }
    },

    {
      name: 'turtle',
      averageLifespan: 100,
      get: function(type){
        if(type==='name')
          return this.name;
        else if(type==='averageLifespan')
          return this.averageLifespan;
      }
    }
  ]
}

exports.modules = mortalSpeciesQuery;