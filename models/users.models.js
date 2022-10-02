const mongoose = require("mongoose");
const { Schema } = mongoose;

const myUsers = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  Posts: [{ type: String }],
});

const Users = mongoose.model("Users", myPosts);

module.exports = Users;
