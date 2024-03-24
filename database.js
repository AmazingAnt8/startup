const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const quandaryCollection = db.collection('defaultQuandaries');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  console.log("testing");
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(username) {
  return userCollection.findOne({ username: username });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(username, password) {
  // Hash the password before we insert it into the database
  console.log("createUser");
  const passwordHash = await bcrypt.hash(password, 10);
  const defaultQuandaries = ["Overstimulated", "Understimulated", "Anxious", "Lethargic"];
  const defaultSuggestions = [["Listen to calming music", "Hug a stuffed animal"], ["Dance", "Engage in a special interest/hyperfixation"], 
    ["Listen to calming music", "Talk with a friend"], ["Go for a walk", "Engage in a special interest/hyperfixation"]];
  
  const user = {
    username: username,
    password: passwordHash,
    quandaries: defaultQuandaries,
    suggestions: defaultSuggestions,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function getRandomQuandary() {
    let n = 0;
    let result = userCollection.find({ username : localStorage.getItem('username') }, { quandaries : { $slice : [n , 1] } } );
    console.log(result);
}

function addQuandary(quandary) {
    userCollection.updateOne(
        { username: localStorage.getItem('username') },
        { $push: { quandaries: quandary }}
    );
}

function addSuggestion(suggestion, index) {
    userCollection.updateOne(
        { username: localStorage.getItem('username') },
        { $push: { suggestions: quandary }}, //how do I insert into a nested array?
    )
}

/*
function addScore(score) {
  scoreCollection.insertOne(score);
}

function getHighScores() {
  const query = { score: { $gt: 0, $lt: 900 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}
*/

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  //addScore,
  //getHighScores,
};