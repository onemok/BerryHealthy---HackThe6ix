const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const ParentSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email_address: {
        type: String
    },
    password: {
        type: String
    },
    phone_number: {
        type: String
    },
    children: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Children', default: "6300399fcd7e8afedf36e7dc"
    }},
    {timestamps: true},
    {collection: 'parents'});

// This middleware needs to salt and hash passwords before they are saved to the database.
ParentSchema.pre("save", function (next) {
    const parent = this
    
    if (this.isModified("password") || this.isNew) {
        bcrypt.genSalt(10, function (saltError, salt) {
        if (saltError) {
            return next(saltError)
        } else {
            bcrypt.hash(parent.password, salt, function(hashError, hash) {
            if (hashError) {
                return next(hashError)
            }
    
            parent.password = hash
            next()
            })
        }
        })
    } else {
        return next()
    }
})

// This method uses bcrypt to compare the password parameter from a website login form and the hashed password stored in the database
ParentSchema.methods.comparePassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(error, isMatch) {
      if (error) {
        return callback(error)
      } else {
        callback(null, isMatch)
      }
    })
  }

const Parent = mongoose.model('Parent', ParentSchema);
        
module.exports = Parent;