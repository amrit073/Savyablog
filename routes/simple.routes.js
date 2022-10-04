const router = require("express").Router();
const {
  getPost,
  makePost,
  allheh,
  makeComment,
  makeLike,
} = require("../controllers/actions.controllers");

router.get("/", getPost);
router.post("/", makePost);
router.get("/all", allheh);
router.post("/comment", makeComment);
router.post("/like", makeLike);
module.exports = router;
