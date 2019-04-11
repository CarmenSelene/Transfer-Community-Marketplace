const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/randomsamaritans", { useNewUrlParser: true }
);

const userSeed = [
  {
    userId: "001",
    firstName: "King",
    lastName: "Steven",
    password: "12345",
    location: "St Clair Station",
    email: "email.address1@gmail.com",
    date: new Date(Date.now())
  },
  {
    userId: "002",
    firstName: "King",
    lastName: "George",
    password: "12345",
    location: "Yonge and Bloor",
    email: "email.address2@gmail.com",
    date: new Date(Date.now())
  },
  {
    userId: "003",
    firstName: "Saryn",
    lastName: "Summer",
    password: "12345",
    location: "Bathurst",
    email: "email.address3@gmail.com",
    date: new Date(Date.now())
  }
];

// const postSeed = [
//   {
//     email: "email.address3@gmail.com",
//     category: "Services",
//     location: "Bathurst Station",
//     description: "Demo post content #1",
//     contactNo: "416-416-4164",
//     price: "12.45",
//     date: new Date(Date.now())
//   },
//   {
//     email: "email.address1@gmail.com",
//     category: "Babysitting",
//     location: "Coxwell Station",
//     description: "Demo post content #1",
//     contactNo: "416-416-4164",
//     price: "12.45",
//     date: new Date(Date.now())
//   },
//   {
//     email: "email.address2@gmail.com",
//     category: "Food",
//     location: "Bathurst Station",
//     description: "Demo post content #1",
//     contactNo: "416-416-4164",
//     price: 12.45,
//     date: new Date(Date.now())
//   }
// ];


db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " User records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  // db.Post
  // .remove({})
  // .then(() => db.Post.collection.insertMany(postSeed))
  // .then(data => {
  //   console.log(data.result.n + " Post records inserted!");
  //   process.exit(0);
  // })
  // .catch(err => {
  //   console.error(err);
  //   process.exit(1);
  // });