const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const User = require("../models/user");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    const { id, emails } = profile;
    let user = await User.findOne({ oauthProvider: "google", oauthId: id });
    if (!user) {
        user = await User.create({
            email: emails[0].value,
            oauthProvider: "google",
            oauthId: id
        });
    }
    done(null, user);
}));

// GitHub OAuth Strategy (Ensuring Email Retrieval)
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/github/callback",
    scope: ["user:email"],  // Ensure email is requested
    passReqToCallback: true
}, async (req, accessToken, refreshToken, profile, done) => {
    try {
        let email = profile.emails?.[0]?.value || "";  
        let existingUser = await User.findOne({ email });

        if (existingUser) {
            return done(null, existingUser);  
        }

      
        let newUser = await User.create({
            email,
            oauthProvider: "github",
            oauthId: profile.id
        });

        return done(null, newUser);
    } catch (error) {
        return done(error, null);
    }
}));

module.exports = passport;


