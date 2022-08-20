const mongoose = require('mongoose');

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
    }},
    {timestamps: true},
    {collection: 'children'});

    const Children = mongoose.model('Children', ChildrenSchema, 'children');
        
module.exports = Children;

