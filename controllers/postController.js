const db = require("../models");
const moment = require('moment');
const today = moment().startOf('day');
const date = new Date(today.toDate());
console.log(date);

// Defining methods for the postController
module.exports = {
  findAll: function(req, res) {
  let userid = req.query.User;
  console.log(userid);
    db.Post
      .find({$and:[{category:req.query.category},{expiryDate:{$gte:date}},{buyerId:0},{location:req.query.location},{User:{$ne:userid}}]})   
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log(req.params.id);
    db.Post
      .find({$and:[{User:req.params.id},{buyerId:0},{expiryDate:{$gte:date}}]})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  
  create: function(req, res) {
    db.Post
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    let cBuyerId = req.body.buyerId;
    console.log("Buyer id is : "+ cBuyerId)
    db.Post
      .updateOne({ _id: req.body.postId},{ $set: { buyerId: cBuyerId }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Post
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};