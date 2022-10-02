const mongoose = require("mongoose");
const { Schema } = mongoose;

const myPosts = new Schema({
  id: Schema.Types.ObjectId,
  title: String,
  Date: Date,
  Body: String,
  Poster: String,
  Likes: [{ type: String }],
});

const Posts = mongoose.model("Posts", myPosts);

module.exports = Posts;
