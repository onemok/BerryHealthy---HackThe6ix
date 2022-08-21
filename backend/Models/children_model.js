const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const ChildrenSchema = new mongoose.Schema({
    username: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    birthyear: {
        type: String
    },
    height: {
        type: String
    },
    weight: {
        type: String
    },
    exercise: {
        type: String
    },
    password: {
        type: String
    }},
    {timestamps: true},
    {collection: 'children'});

// This middleware needs to salt and hash passwords before they are saved to the database.
ChildrenSchema.pre("save", function (next) {
    const children = this
    
    if (this.isModified("password") || this.isNew) {
        bcrypt.genSalt(10, function (saltError, salt) {
        if (saltError) {
            return next(saltError)
        } else {
            bcrypt.hash(children.password, salt, function(hashError, hash) {
            if (hashError) {
                return next(hashError)
            }
    
            children.password = hash
            next()
            })
            }
        })
    } else {
        return next()
    }
})

// This method uses bcrypt to compare the password parameter from a website login form and the hashed password stored in the database
ChildrenSchema.methods.comparePassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(error, isMatch) {
      if (error) {
        return callback(error)
      } else {
        callback(null, isMatch)
      }
    })
  }

const Children = mongoose.model('Children', ChildrenSchema, 'children');
        
module.exports = Children;

