const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const router = require("./routes/simple.routes.js");

app.use(express.urlencoded({ encoded: false }));

app.use("/", router);

app.listen(PORT, async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log(`startes listening at port ${PORT}`);
});
