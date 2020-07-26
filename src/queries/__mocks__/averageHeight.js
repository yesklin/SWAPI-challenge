
const averageHeightQuery = async (Pass) => {
  return [
    {
      height: 170,
      get: function(type){
        if(type==='height')
          return this.height;
      }
    },
    {
      height: 180,
      get: function(type){
        if(type==='height')
          return this.height;
      }
    },
    {
      height: 190,
      get: function(type){
        if(type==='height')
          return this.height;
      }
    }
  ]
}

exports.modules = averageHeightQuery;

