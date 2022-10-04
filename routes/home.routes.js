const router = require("express").Router();
const { getHome } = require("../controllers/home.controllers.js");

router.get("/", getHome);

module.exports = router;
