require("dotenv").config();

const config = {
  callbackURL: "http://localhost:3000/auth/google/callback",
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  cookey1: process.env.COOKIE_KEY_1,
  cookey2: process.env.COOKIR_KEY_2,
  user: process.env.user,
  password: process.env.password,
  mongo_url: process.env.MONGO_URL,
};

module.exports = config;
