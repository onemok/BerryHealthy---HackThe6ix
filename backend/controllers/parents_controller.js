const express = require("express");
const router = express.Router();
const Parents = require("../Models/parent_model");

// get all parents
router.get("/", (req, res) => {
  Parents.find()
    .populate({
      path: "children",
    })
    .then((parent) => {
      res.json(parent);
    })
    .catch((err) => {
      res.json(err);
    });
});

// get a specific parent
router.get("/:id", (req, res) => {
  Parents.findById(req.params.id)
    .populate({
      path: "children",
    })
    .then((parent) => {
      res.json(parent);
    })
    .catch((err) => {
      res.json(err);
    });
});

// new parent signup
router.post("/signup", (req, res) => {
  const newParentDbDocument = new Parents(req.body);
  newParentDbDocument.save();
  res.json(
    `Successfully created a new parent with email ${req.body.email_address}`
  );
});

// existing parent login
router.post("/signin", (req, res) => {
  console.log(req.body);
  Parents.findOne(
    { email_address: req.body.email_address },
    function (err, parent) {
      if (err) throw err;

      // if the email doesn't exist
      if (parent === null || parent === undefined) {
        res.json("No account associated with that email.");
      }

      if (parent) {
        // test a matching password
        parent.comparePassword(req.body.password, function (err, isMatch) {
          if (err) throw err;
          console.log(req.body.password, isMatch);

          // password validation
          if (isMatch === true) {
            res.json(`Successfully logged in with ${req.body.email_address}`);
            // res.redirect('/mainPage')
          } else if (isMatch === false) {
            res.json(`Wrong password for ${req.body.email_address}`);
          }
        });
      }
    }
  );
});

module.exports = router;
