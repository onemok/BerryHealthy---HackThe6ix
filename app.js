const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
const got = require('got');
const { pipeline } = require('stream');

const cors = require('cors')

app.use(express.urlencoded({
    extended: false
}))

// Apply CORS to all routes
app.use(cors({ origin: '*'}));

app.get('/', (req, res) => {
    res.json('This is BerryHealthy!')
});

const mainpageController = require('./controllers/mainpage_controller.js');
app.use('/mainpage', mainpageController)
const loginController = require('./controllers/login_controller.js');
app.use('/login', loginController)

app.get('/', function(req, res) {
    const dataStream = got.stream({
        uri: 'http://www.giantbomb.com/api/search',
        qs: {
          api_key: '123456',
          query: 'World of Warcraft: Legion'
        }
    });
    pipeline(dataStream, res, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
  });


/*
// This sets up a route to localhost:3000/random and goes off and hits
// cat-fact.herokuapp.com/facts/random
app.get('/:apiRoute', async (req, res) => {
  try {
    const { apiRoute } = req.params
    const apiResponse = await fetch(
      'https://cat-fact.herokuapp.com/facts/' + apiRoute
    )
    const apiResponseJson = await apiResponse.json()
    // await db.collection('collection').insertOne(apiResponseJson)
    console.log(apiResponseJson)
    res.send('Done – check console log')
  } catch (err) {
    console.log(err)
    res.status(500).send('Something went wrong')
  }
})
*/


// Run server
app.listen(PORT, ()=> {
    console.log(`App running at http://localhost:${PORT}`)
});

module.exports = app;