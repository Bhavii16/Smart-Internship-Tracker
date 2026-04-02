const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["student","recruiter", "admin"], default: "student" } // Add this
});

module.exports = mongoose.model("User", userSchema);
