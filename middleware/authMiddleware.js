// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//   // 1. Get token from the header
//   // Common format is "Authorization: Bearer <token>"
//   const authHeader = req.header("Authorization");
//   const token = authHeader && authHeader.split(" ")[1];

//   // 2. Check if no token
//   if (!token) {
//     return res.status(401).json({ msg: "No token, authorization denied" });
//   }

//   // 3. Verify token
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
//     // 4. Add user from payload to request object
//     req.user = decoded; // Adds the user ID to the request object
//     next();
//   } catch (err) {
//     res.status(401).json({ msg: "Token is not valid" });
//   }
// };

// module.exports = authMiddleware;

const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Decoded payload contains 'id', making it accessible as req.user.id
    req.user = decoded; 
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = authMiddleware;