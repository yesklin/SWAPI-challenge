const ParseMockDB = require('parse-mockdb')
const Parse = require('parse/node')


//importing queries
const firstMovieQuery = require('../src/queries/firstMovie').modules;


//functions to create and save objects
let Film = Parse.Object.extend('Film');
const createFilm = (title, releaseDate) => { //generetaes and saves Film instance into the database
  let film = new Film();
  
  film.set('title', title);
  film.set('releaseDate',releaseDate );

  return film.save()
}


describe('Testing usage of parse-mock-db package', () => {
  beforeEach(() => {
    ParseMockDB.mockDB(Parse)
    jest.setTimeout(20000)
  })

  afterEach(() => {
    ParseMockDB.cleanUp()
    ParseMockDB.unMockDB()
  })


  it('Should find the first star wars film released', async () => {
    
    await createFilm('Return of the Jedi', new Date(1983, 5, 25));
    await createFilm('A New Hope', new Date(1977, 5, 25));
    await createFilm('Revenge of the Sith', new Date(2005, 5, 19));
    

    const response = await firstMovieQuery(Parse);
    expect(response).toBe("A New Hope")
  })
})