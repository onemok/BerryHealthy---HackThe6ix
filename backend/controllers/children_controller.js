const express = require('express');
const router = express.Router();
const Children = require('../Models/children_model');

router.get("/", (req, res) => {
    Children.find()
    .then(child => {
      res.json(child);
    })
    .catch(err => {
        res.json(err);
    })
});

// get a specific child
router.get("/:id", (req, res) => {
    Children.findById(req.params.id)
    .then(child => {
        res.json(child);
    })
    .catch(err => {
        res.json(err);
    })
});

// new children signup
router.post("/signup", (req, res) => {
    Children.create(req.body)
    .then(newChild => {
        res.json(newChild);
    })
    .catch(err => {
        res.json(err);
    })
});

module.exports = router;