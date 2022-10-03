const mongoose = require("mongoose");
const { Schema } = mongoose;

const myPosts = new Schema({
  id: Schema.Types.ObjectId,
  title: { type: String, required: true },
  Date: Date,
  Body: { type: String, required: true },
  Poster: { type: String, required: true },
  Likes: [{ type: String }],
  comments: [{ Content: String, id: String }],
});

const Posts = mongoose.model("Posts", myPosts);

module.exports = Posts;
