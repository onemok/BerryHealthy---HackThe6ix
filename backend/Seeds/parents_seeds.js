const mongoose = require("mongoose");
const Parents = require("../Models/parent_model");
const ObjectId = require("mongodb").ObjectID;

mongoose
  .connect("mongodb://docker:mongopw@localhost:49153", {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo connection open");
  })
  .catch((err) => {
    console.log(err);
  });

const seedParents = [
  {
    _id: ObjectId("6300399fcd7e8afedf36e7dc"),
    firstName: "SpongeBob",
    lastName: "Squarepants",
    email_address: "spongebob.squarepants@gmail.com",
    // plaintext password: 'wow123'
    password: "$2a$10$CwH1OYZaLvNVZPgOZd4g3eIbtqdiyY6mQOD3QXQ.nFoMlGURpCLYa",
    phone_number: "111-222-3333",
    children: "6300407cf946205c01283f95",
  },
  {
    _id: ObjectId("630039a9d638e0b4971ad46c"),
    firstName: "Squidward",
    lastName: "Tentacles",
    email_address: "squidward.tentacles@gmail.com",
    // plaintext password: 'abc123'
    password: "$2a$10$FWLbOUPYCLlHgnk9KOEvKe4RnN5TM2j.HELbLwcPGSV1aq20q4sWi",
    phone_number: "444-555-6666",
    children: "630040855630b1e11ca446bd",
  },
  {
    _id: ObjectId("630039b627ae26affe3e04b2"),
    firstName: "Patrick",
    lastName: "Star",
    email_address: "patrick.star@gmail.com",
    // plaintext password: 'ddd123'
    password: "$2a$10$hf0zyqNe2Fv4Yfl9GEmUweNSXBmdd1MB/JYbgJFdVbKtPpnO5FL32",
    phone_number: "777-888-9999",
    children: "6300408b5649f5dbc202c83d",
  },
];

const seedDB = async () => {
  await Parents.deleteMany({});
  await Parents.insertMany(seedParents);
};
seedDB().then(() => {
  mongoose.connection.close();
});
