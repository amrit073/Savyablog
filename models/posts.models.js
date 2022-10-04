const mongoose = require("mongoose");
const { Schema } = mongoose;

const myPosts = new Schema({
  id: Schema.Types.ObjectId,
  Title: { type: String, required: true },
  Date: Date,
  Body: { type: String, required: true },
  Poster: { type: String, required: true },
  Likes: [{ type: String }],
  Comments: [{ Content: String, id: String }],
});

const Posts = mongoose.model("Posts", myPosts);

module.exports = Posts;
