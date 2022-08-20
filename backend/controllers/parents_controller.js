const express = require('express');
const router = express.Router();
const Parents = require('../Models/parent_model');

// get all parents
router.get("/", (req, res) => {
    Parents.find().populate({
      path: 'children'
    })
    .then(parent => {
      res.json(parent);
    })
    .catch(err => {
        res.json(err);
    })
  });

// get a specific parent
router.get("/:id", (req, res) => {
    Parents.findById(req.params.id).populate({
        path: 'children'
    })
    .then(parent => {
        res.json(parent);
    })
    .catch(err => {
        res.json(err);
    })
});

// new parent signup
router.post("/signup", (req, res) => {
    Parents.create(req.body)
    .then(newParent => {
        res.json(newParent);
    })
    .catch(err => {
        res.json(err);
    })
});

module.exports = router;