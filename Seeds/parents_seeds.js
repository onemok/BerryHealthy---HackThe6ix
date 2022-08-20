const mongoose = require('mongoose');
const Parents = require('../Models/parent_model');
const ObjectId = require('mongodb').ObjectID;

mongoose
    .connect('mongodb://localhost/berryhealthy', {
        useNewURLParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Mongo connection open')
        })
        .catch(err => {
            console.log(err)
        })

    const seedParents = [
        {
            _id: ObjectId(),
            firstName: 'SpongeBob',
            lastName: 'Squarepants',
            email_address: 'spongebob.squarepants@gmail.com',
            password: 'abc123',
            phone_number: '111-222-3333'
        },
        {
            _id: ObjectId(),
            firstName: 'Squidward',
            lastName: 'Tentacles',
            email_address: 'squidward.tentacles@gmail.com',
            password: 'abc123',
            phone_number: '444-555-6666'
        },
        {
            _id: ObjectId(),
            firstName: 'Patrick',
            lastName: 'Star',
            email_address: 'patrick.star@gmail.com',
            password: 'abc123',
            phone_number: '777-888-9999'
        }
    ]

    const seedDB = async () => {
        await Parents.deleteMany({});
        await Parents.insertMany(seedParents);
    }
    seedDB().then(() => {
        mongoose.connection.close()
    })