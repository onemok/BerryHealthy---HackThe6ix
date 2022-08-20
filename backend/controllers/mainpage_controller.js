const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json('This is the main page of BerryHealthy')
});

module.exports = router;