const ParseMockDB = require('parse-mockdb')
const Parse = require('parse/node')

let GameScore = Parse.Object.extend('GameScore');

const createGameScore = (playerName, score, cheatMode) => { //generetaes and saves GameScore instance into the database
  let gameScore = new GameScore();
  
  gameScore.set('playerName', playerName);
  gameScore.set('score', score);
  gameScore.set('cheatMode', cheatMode);

  return gameScore.save()
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


  it('Should save four games scores and count how many of those have score greater then 100.', async () => {
    
    await createGameScore('Marcos', 120, false);
    await createGameScore('Julia', 300, true);
    await createGameScore('Mario', 10, false);
    await createGameScore('Rita', 400, false);
    

    const query = new Parse.Query(GameScore)
    .greaterThan('score', 100)

    const response = await query.count()
    expect(response).toBe(3)
  })
})