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
            _id: ObjectId(),
            username: 'wee123',
            firstName: 'Peter',
            lastName: 'Parker',
            birthyear: '2010',
            height: '5 FT 2 IN',
            weight: '90 LBS'
        },
        {
            _id: ObjectId(),
            username: 'yay123',
            firstName: 'Michelle',
            lastName: 'Jones-Watson',
            birthyear: '2012',
            height: '5 FT 3 IN',
            weight: '85 LBS'
        },
        {
            _id: ObjectId(),
            username: 'wow123',
            firstName: 'Ned',
            lastName: 'Leeds',
            birthyear: '2014',
            height: '5 FT 4 IN',
            weight: '120 LBS'
        },
    ]

    const seedDB = async () => {
        await Children.deleteMany({});
        await Children.insertMany(seedChildren);
    }
    seedDB().then(() => {
        mongoose.connection.close()
    })