const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
  category: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: [String],required: true },
  contactNo: { type: String, required: true },
  price: { type:Number, default: '0'},
  expiryDate: { type: Date, required: true },
  buyerId: {type: String,default: '0'},
  User: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
  });

const Post = mongoose.model("Post", postSchema);

module.exports = Post;