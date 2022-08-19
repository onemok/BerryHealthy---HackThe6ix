const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json('This is the login page for BerryHealthy')
});

module.exports = router;