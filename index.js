const router = require("./routes/simple.routes.js");
const homerouter = require("./routes/home.routes");
const cookieSession = require("cookie-session");
const passport = require("./utils/auth");
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const config = require("./configs");
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(
  cookieSession({
    name: "session",
    maxAge: 60 * 60 * 24 * 1000 * 30,
    keys: [config.cookey1, config.cookey2],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  })
);

app.get("/login", (req, res) => {
  res.sendFile("/home/amrit/projects/savyata/views/login.html");
});

const checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};

app.use(checkAuthenticated);

app.post("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
});

app.use("/api/v1", router);
app.use("/", homerouter);
app.get("/dashboard", (req, res) => {
  res.send(`this is protected, you have accesss ${req.user} `);
});

app.listen(PORT, async () => {
  await mongoose.connect(config.mongo_url);
  console.log(`startes listening at port ${PORT}`);
});
