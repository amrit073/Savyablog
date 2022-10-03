const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const config = require("../configs");

const authUser = (request, accessToken, refreshToken, profile, done) => {
  return done(null, profile);
};

passport.use(
  new GoogleStrategy(
    {
      clientID: config.clientID,
      clientSecret: config.clientSecret,
      callbackURL: config.callbackURL,
      passReqToCallback: true,
    },
    ///database ma user add garni vaye yeta garni!
    authUser
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;
