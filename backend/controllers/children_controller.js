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
    const newChildrenDbDocument = new Children(req.body)
    newChildrenDbDocument.save()
    res.json(`Successfully created a new children with username ${req.body.username}`)
});

// existing children login
router.post("/signin", (req, res) => {
    Children.findOne({ username: req.body.username}, function(err, children) {
        if (err) throw err;

        // if the username doesn't exist
        if ( children === null || children === undefined ){
            res.json("No account associated with that username.")
        }
        
        if ( children ){
            // test a matching password
            children.comparePassword(req.body.password, function(err, isMatch) {
                if (err) throw err;
                console.log(req.body.password, isMatch)

                // password validation
                if ( isMatch === true ){
                    res.json(`Successfully logged in with ${req.body.username}`)
                    // res.redirect('/mainPage')
                }
                else if ( isMatch === false ){
                    res.json(`Wrong password for ${req.body.username}`)
                }
            })
        };
    });
});

module.exports = router;