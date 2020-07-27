
const guganBasicQuery = async (Parse) =>  {

  return [
    object =  {
      name: 'Carlos',
      get: function(type){
        if(type==='name')
          return this.name;
      }
    },
    object =  {
      name: 'João',
      get: function(type){
        if(type==='name')
          return this.name;
      }
    },
    object =  {
      name: 'Maria',
      get: function(type){
        if(type==='name')
          return this.name;
      }
    }
    
  ] 

}

exports.modules = guganBasicQuery;