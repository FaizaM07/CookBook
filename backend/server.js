// const express = require("express");
// const dotenv = require("dotenv").config();
// const connectDb = require("./config/connectionDb");
// const passport = require("passport");
// const session = require("express-session");
// const cors = require("cors");
// require("./config/passport"); // Ensure Passport strategies are loaded

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Database connection
// connectDb();


// app.use(cors());


// // Middlewares
// app.use(express.json());
// app.use(cors());
// app.use(express.static("public"));

// app.use(
//     session({
//         secret: process.env.SESSION_SECRET,
//         resave: false,
//         saveUninitialized: false,
//     })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// // Debugging middleware for incoming requests
// app.use((req, res, next) => {
//     console.log(`Incoming request: ${req.method} ${req.url}`);
//     next();
// });

// // Test route to ensure backend is working
// app.get("/test", (req, res) => {
//     res.json({ message: "Backend is working!" });
// });

// // Route handlers
// app.use("/", require("./routes/user"));
// app.use("/recipe", require("./routes/recipe")); // Assuming you have a recipe route set up

// // OAuth routes for Google and GitHub
// app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
// app.get(
//     "/auth/google/callback",
//     passport.authenticate("google", { failureRedirect: "/login" }),
//     (req, res) => {
//         res.redirect("/"); // Redirect to homepage or desired route after successful login
//     }
// );

// app.get("/auth/github", passport.authenticate("github", { scope: ["user:email"] }));
// app.get(
//     "/auth/github/callback",
//     passport.authenticate("github", { failureRedirect: "/login" }),
//     (req, res) => {
//         res.redirect("/"); // Redirect to homepage or desired route after successful login
//     }
// );

// // Start the server
// app.listen(PORT, (err) => {
//     if (err) {
//         console.error("Server failed to start:", err);
//     } else {
//         console.log(`App is listening on port ${PORT}`);
//     }
// });






// //-----------------------------------------------------------------------------------------------








const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/connectionDb");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
require("./config/passport"); // Ensure Passport strategies are loaded

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
connectDb();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());

// Debugging middleware for incoming requests
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

//report

app.use("/report", require("./routes/report"));







// Test route to ensure backend is working
app.get("/test", (req, res) => {
    res.json({ message: "Backend is working!" });
});

// Route handlers
app.use("/", require("./routes/user"));
app.use("/recipe", require("./routes/recipe")); 
app.use("/comments", require("./routes/comments")); // ✅ Added Comments Route

// OAuth routes for Google and GitHub
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
        res.redirect("/"); // Redirect after successful login
    }
);

app.get("/auth/github", passport.authenticate("github", { scope: ["user:email"] }));
app.get(
    "/auth/github/callback",
    passport.authenticate("github", { failureRedirect: "/login" }),
    (req, res) => {
        res.redirect("/"); // Redirect after successful login
    }
);

// Start the server
app.listen(PORT, (err) => {
    if (err) {
        console.error("Server failed to start:", err);
    } else {
        console.log(`App is listening on port ${PORT}`);
    }
});
