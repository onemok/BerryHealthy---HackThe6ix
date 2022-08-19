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
    res.json('This is Berry Healthy!')
});

// Run server
app.listen(port, ()=> {
    console.log(`App running at http://localhost:${PORT}`)
});

module.exports = app;


