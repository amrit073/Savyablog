const Posts = require("../models/posts.models");

const getHome = (req, res) => {
  Posts.find({}, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
};

module.exports = { getHome };
