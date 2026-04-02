const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashed,
    role: role || "student" // Use the role from the body
  });

  res.json({ message: "Registered successfully" });
  }
  catch (error) {
    res.status(400).json({ message: "Error: Email might already exist." });
  }
};

// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });
//   if (!user) return res.status(400).json({ msg: "User not found" });

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return res.status(400).json({ msg: "Invalid password" });

//   const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);

// res.json({ token, role: user.role }); // Send role to frontend
// };

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

        // Create the token
        const token = jwt.sign(
            { id: user._id, role: user.role }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1d' }
        );

        // SUCCESS: Send the token, role, AND userId to the frontend
        res.json({ 
            token, 
            role: user.role, 
            userId: user._id 
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};