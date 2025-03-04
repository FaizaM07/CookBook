const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { restart } = require("nodemon");

const userSignUp = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password is required" });
    }
    let user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ error: "Email is already exist" });
    }
    const hashPwd = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        email, password: hashPwd
    });
    let token = jwt.sign({ email, id: newUser._id }, process.env.SECRET_KEY);
    return res.status(200).json({ token, user: newUser });
};

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password is required" });
    }
    let user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        let token = jwt.sign({ email, id: user._id }, process.env.SECRET_KEY);
        return res.status(200).json({ token, user });
    } else {
        return res.status(400).json({ error: "Invalid credentials" });
    }
};

const getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json({ email: user.email });
};

// const oauthRedirect = (req, res) => {
//     // Send JWT Token after OAuth login
//     const { email, id } = req.user;
//     const token = jwt.sign({ email, id }, process.env.SECRET_KEY);
//     res.redirect("http://localhost:5173") ;
  
// };


const oauthRedirect = (req, res) => {
    if (!req.user) {
        return res.status(400).json({ error: "OAuth authentication failed" });
    }

    // Ensure req.user contains the correct structure
    const user = req.user.user || req.user; // Handle cases where user object is nested or not
    const { email, id } = user;
    const token = req.user.token || jwt.sign({ email, id }, process.env.SECRET_KEY, { expiresIn: "1d" });

    // Redirect frontend with token
    res.redirect(`http://localhost:5173?token=${token}`);
};




module.exports = { userLogin, userSignUp, getUser, oauthRedirect };


//-------------------------------------------------------------------------------------------------


// const User = require("../models/user");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const userSignUp = async (req, res) => {
//     const { email, password } = req.body;
//     if (!email || !password) {
//         return res.status(400).json({ message: "Email and password required" });
//     }
//     let user = await User.findOne({ email });
//     if (user) {
//         return res.status(400).json({ error: "Email already exists" });
//     }
//     const hashPwd = await bcrypt.hash(password, 10);
//     const newUser = await User.create({ email, password: hashPwd });

//     let token = jwt.sign({ email, id: newUser._id }, process.env.SECRET_KEY, { expiresIn: "1d" });
//     return res.status(200).json({ token, user: newUser });
// };

// const userLogin = async (req, res) => {
//     const { email, password } = req.body;
//     if (!email || !password) {
//         return res.status(400).json({ message: "Email and password required" });
//     }
//     let user = await User.findOne({ email });
//     if (user && await bcrypt.compare(password, user.password)) {
//         let token = jwt.sign({ email, id: user._id }, process.env.SECRET_KEY, { expiresIn: "1d" });
//         return res.status(200).json({ token, user });
//     } else {
//         return res.status(400).json({ error: "Invalid credentials" });
//     }
// };

// const getUser = async (req, res) => {
//     const user = await User.findById(req.params.id);
//     res.json({ email: user.email });
// };

// module.exports = { userLogin, userSignUp, getUser };
