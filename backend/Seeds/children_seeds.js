const mongoose = require('mongoose');
const Children = require('../Models/children_model');
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

    const seedChildren = [
        {
            _id: ObjectId('6300407cf946205c01283f95'),
            username: 'wee123',
            firstName: 'Peter',
            lastName: 'Parker',
            birthyear: '2010',
            height: '5 FT 2 IN',
            weight: '90 LBS',
            // plaintext password: 'abc123'
            password: '$2a$10$FWLbOUPYCLlHgnk9KOEvKe4RnN5TM2j.HELbLwcPGSV1aq20q4sWi',
        },
        {
            _id: ObjectId('630040855630b1e11ca446bd'),
            username: 'yay123',
            firstName: 'Michelle',
            lastName: 'Jones-Watson',
            birthyear: '2012',
            height: '5 FT 3 IN',
            weight: '85 LBS',
            // plaintext password: 'abc123'
            password: '$2a$10$FWLbOUPYCLlHgnk9KOEvKe4RnN5TM2j.HELbLwcPGSV1aq20q4sWi',
        },
        {
            _id: ObjectId('6300408b5649f5dbc202c83d'),
            username: 'wow123',
            firstName: 'Ned',
            lastName: 'Leeds',
            birthyear: '2014',
            height: '5 FT 4 IN',
            weight: '120 LBS',
            // plaintext password: 'abc123'
            password: '$2a$10$FWLbOUPYCLlHgnk9KOEvKe4RnN5TM2j.HELbLwcPGSV1aq20q4sWi',
        },
    ]

    const seedDB = async () => {
        await Children.deleteMany({});
        await Children.insertMany(seedChildren);
    }
    seedDB().then(() => {
        mongoose.connection.close()
    })