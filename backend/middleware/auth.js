// const jwt = require("jsonwebtoken");

// const verifyToken = async (req, res, next) => {
//     let token = req.headers["authorization"];

//     if (token) {
//         token = token.split(" ")[1];
//         jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//             if (err) {
//                 return res.status(400).json({ message: "Invalid token" });
//             } else {
//                 req.user = decoded;
//             }
//         });
//         next();
//     } else {
//         return res.status(400).json({ message: "Invalid token" });
//     }
// };
// module.exports = verifyToken;




const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
    let token = req.headers["authorization"];
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    token = token.split(" ")[1];  // Remove "Bearer " from token
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token" });
        } else {
            req.user = decoded;
            next();
        }
    });
};

module.exports = verifyToken;


//-----------------------------------------------------------------------------------


// const jwt = require("jsonwebtoken");

// const verifyToken = async (req, res, next) => {
//     let token = req.headers["authorization"];

//     if (token) {
//         token = token.split(" ")[1];
//         jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//             if (err) {
//                 return res.status(400).json({ message: "Invalid token" });
//             } else {
//                 req.user = decoded;
//                 next();
//             }
//         });
//     } else {
//         return res.status(400).json({ message: "No token provided" });
//     }
// };

// module.exports = verifyToken;
