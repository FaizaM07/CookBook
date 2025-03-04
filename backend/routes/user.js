const express = require("express");
const passport = require("passport");
const router = express.Router();
const { userLogin, userSignUp, getUser, oauthRedirect } = require("../controller/user");

router.post("/signUp", userSignUp);
router.post("/login", userLogin);
router.get("/user/:id", getUser);

// OAuth routes
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/auth/google/callback", passport.authenticate("google"), oauthRedirect);

router.get("/auth/github", passport.authenticate("github", { scope: ["user:email"] }));

router.get("/auth/github/callback",
    passport.authenticate("github", { failureRedirect: "http://localhost:5173/?error=OAuthFailed" }),
    oauthRedirect
);


module.exports = router;


//--------------------------------------------------------------------------------------------------------


// //----------------------------------------------------------------------


// const express = require("express");
// const passport = require("passport");
// const jwt = require("jsonwebtoken");
// const router = express.Router();
// const { userLogin, userSignUp, getUser } = require("../controller/user");

// const FRONTEND_URL = "http://localhost:5173"; // Change if needed

// router.post("/signUp", userSignUp);
// router.post("/login", userLogin);
// router.get("/user/:id", getUser);

// // OAuth routes - Google
// router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// router.get("/auth/google/callback",
//     passport.authenticate("google", { failureRedirect: `${FRONTEND_URL}/?error=OAuthFailed` }),
//     (req, res) => {
//         if (!req.user) {
//             return res.redirect(`${FRONTEND_URL}/?error=OAuthFailed`);
//         }

//         // Generate JWT token
//         const token = jwt.sign(
//             { id: req.user._id, email: req.user.email },
//             process.env.SESSION_SECRET,
//             { expiresIn: "7d" }
//         );

//         // Redirect to frontend with token
//         res.redirect(`${FRONTEND_URL}/?token=${token}`);
//     }
// );

// // OAuth routes - GitHub
// router.get("/auth/github", passport.authenticate("github", { scope: ["user:email"] }));

// router.get("/auth/github/callback",
//     passport.authenticate("github", { failureRedirect: `${FRONTEND_URL}/?error=OAuthFailed` }),
//     (req, res) => {
//         if (!req.user) {
//             return res.redirect(`${FRONTEND_URL}/?error=OAuthFailed`);
//         }

//         // Generate JWT token
//         const token = jwt.sign(
//             { id: req.user._id, email: req.user.email },
//             process.env.SESSION_SECRET,
//             { expiresIn: "7d" }
//         );

//         // Redirect to frontend with token
//         res.redirect(`${FRONTEND_URL}/?token=${token}`);
//     }
// );

// module.exports = router;


// //------------------------------------


// // const express = require("express");
// // const passport = require("passport");
// // const router = express.Router();
// // const FRONTEND_URL = "http://localhost:5173"; // Change if needed

// // router.post("/signUp", userSignUp);
// // router.post("/login", userLogin);
// // router.get("/user/:id", getUser);

// // // Google OAuth
// // router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// // router.get("/auth/google/callback",
// //     passport.authenticate("google", { failureRedirect: `${FRONTEND_URL}/?error=OAuthFailed` }),
// //     (req, res) => {
// //         if (!req.user) {
// //             return res.redirect(`${FRONTEND_URL}/?error=OAuthFailed`);
// //         }

// //         // Save user session and redirect
// //         req.session.user = req.user;
// //         res.redirect(`${FRONTEND_URL}/`);
// //     }
// // );

// // // GitHub OAuth
// // router.get("/auth/github", passport.authenticate("github", { scope: ["user:email"] }));

// // router.get("/auth/github/callback",
// //     passport.authenticate("github", { failureRedirect: `${FRONTEND_URL}/?error=OAuthFailed` }),
// //     (req, res) => {
// //         if (!req.user) {
// //             return res.redirect(`${FRONTEND_URL}/?error=OAuthFailed`);
// //         }

// //         // Save user session and redirect
// //         req.session.user = req.user;
// //         res.redirect(`${FRONTEND_URL}/`);
// //     }
// // );

// // module.exports = router;
