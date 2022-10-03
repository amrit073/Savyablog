const mongoose = require("mongoose");
const { Schema } = mongoose;

const myUsers = new Schema({
  id: Schema.Types.ObjectId,
  gid: String,
  name: { type: String, required: true },
  Posts: [{ type: String }],
});

const Users = mongoose.model("Users", myUsers);

module.exports = Users;
