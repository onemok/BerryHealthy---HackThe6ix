const mongoose = require('mongoose');

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
    {collection: 'children'});

    const Parent = mongoose.model('Parent', ParentSchema);
        
module.exports = Parent;