const Users = require("../models/users.models");
const Posts = require("../models/posts.models");

const getPost = (req, res) => {
  Posts.find({ Posters: { $in: req.user.id } }, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
};

const makePost = (req, res) => {
  console.log(req.body);
  const { Title, Body } = req.body;
  const Poster = req.user.id;
  Posts.create({
    Title,
    Body,
    Poster,
  })
    .then((r) => res.send(r))
    .catch((err) => console.log(err));
};

const makeComment = (req, res) => {
  console.log(req.body);
  const { Content, id } = req.body;
  Posts.findByIdAndUpdate(
    id,
    { $push: { Comments: { Content: Content, id: req.user.id } } },
    { new: true },
    (err, data) => {
      if (err) console.log(err);
      res.send(data);
    }
  );
};

const makeLike = (req, res) => {
  console.log(req.body);
  const { id } = req.body;
  Posts.findByIdAndUpdate(
    id,
    { $push: { Likes: req.user.id } },
    { new: true },
    (err, data) => {
      if (err) console.log(err);
      res.send(data);
    }
  );
};

const allheh = (req, res) => {
  res.sendFile("/home/amrit/projects/savyata/views/allheh.html");
};
module.exports = { getPost, makePost, allheh, makeComment, makeLike };
