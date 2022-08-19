const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

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

/*
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

*/

// Run server
app.listen(PORT, ()=> {
    console.log(`App running at http://localhost:${PORT}`)
});

module.exports = app;