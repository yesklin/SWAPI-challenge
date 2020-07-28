const ParseMockDB = require('parse-mockdb')
const Parse = require('parse/node')


//IMPORTING QUERIES ////////////////////////
const firstMovieQuery = require('../src/queries/firstMovie').modules;
const countGenderQuery = require('../src/queries/countGender').modules;
const averageHeightQuery = require('../src/queries/averageHeight').modules;
const mortalSpeciesQuery = require('../src/queries/mortalSpecies').modules;
const guganBasicQuery = require('../src/queries/gunganBasic').modules;
const biggerPlanetQuery = require('../src/queries/biggerPlanet').modules;
////////////////////////////////////////////



//FUNCTIONS TO CREATE AND SAVE OBJECTS WHILE PARSE IS MOCKED /////////////
let Film = Parse.Object.extend('Film');
const createFilm = (title, releaseDate, height) => { //generetaes and saves Film instance into the database
  let film = new Film();
  
  film.set('title', title);
  film.set('releaseDate',releaseDate );
  film.set('height', height);

  return film.save()
}


let Character = Parse.Object.extend('Character');
const createCharacter = (gender, height, species, homeworld) => { //generetaes and saves Character instance into the database
  let character = new Character();
  character.set('gender', gender);
  character.set('height', height);
  character.set('species', species);
  character.set('homeworld', homeworld);

  return character.save()
}

let Specie = Parse.Object.extend('Specie');
const createSpecie = (name, averageLifespan, people) => { //generetaes and saves Character instance into the database
  let specie = new Specie();
  specie.set('name', name);
  specie.set('averageLifespan', averageLifespan);
  specie.set('people', people);
  return specie.save()
}

let Planet = Parse.Object.extend('Planet');
const createPlanet = (population) => { //generetaes and saves Character instance into the database
  let planet = new Planet();
  planet.set('population', population);
  return planet.save()
}
////////////////////////////////////////////////////




//TESTING/////////////////////////////////////////////
describe('Testing usage of parse-mock-db package', () => {
  beforeEach(() => {
    ParseMockDB.mockDB(Parse) //Mocking
    jest.setTimeout(20000);

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


  it('Should count the number of females and males', async () => {
    await createCharacter('male', 170);
    await createCharacter('female', 150);
    await createCharacter('female', 150);
    await createCharacter('hermaphrodite', 160);
    const response = await countGenderQuery(Parse);
    expect(response).toStrictEqual(["M:1", "F:2"]);
  })


  it('Should return all characters that have height defined', async () => { 
    await createCharacter('male', 170);
    await createCharacter('female', null);
    await createCharacter('female', 150);
    await createCharacter('hermaphrodite', 160);
    
    
    const response = await averageHeightQuery(Parse);
    const expec = [response[0].get('height'), response[1].get('height'), response[2].get('height')];
    expect(expec).toStrictEqual([170, 150, 160]);
  })


  it('Should return all characters that have averageLifespan defined, sorted ascending by averageLifespan', async () => { 
    await createSpecie('lions', 200);
    await createSpecie('eagles', null);
    await createSpecie('fish', 10);
    await createSpecie('cat', 10);
    
    
    const response = await mortalSpeciesQuery(Parse)
    const expectations = [response[0].get('averageLifespan'), response[1].get('averageLifespan'), response[2].get('averageLifespan')];
    expect(expectations).toStrictEqual([10, 10, 200]);
  })


  it('Should return all characters that belong to the Gungan species', async () => { 
    
    const notGungan = await createSpecie('notGungan', 200);
    const Gungan = await createSpecie('Gungan', 10);

    await createCharacter('female', 150, Gungan);
    await createCharacter('female', 140, Gungan);
    await createCharacter('female', 100, notGungan);
    await createCharacter('male', 170, Gungan);

    
    const response = await guganBasicQuery(Parse)

    const expectations = [response[0].get('height'), response[1].get('height'), response[2].get('height')];
    expect(expectations).toStrictEqual([150, 140, 170]);
  })

  it('Should return the number of habitants of the bigger planet', async () => { 
    
    const notGungan = await createSpecie('notGungan', 200);
    const Gungan = await createSpecie('Gungan', 10);

    const mars = await createPlanet(1000);
    const saturn = await createPlanet(2000);


    await createCharacter('female', 150, Gungan, mars);
    await createCharacter('female', 140, Gungan, saturn);
    await createCharacter('female', 100, notGungan, saturn);
    await createCharacter('male', 170, Gungan, saturn);

    
    const response = await biggerPlanetQuery(Parse)
    expect(response).toBe(3);
  })

})