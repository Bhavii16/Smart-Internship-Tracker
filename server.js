// // require("dotenv").config();
// // const express = require("express");
// // const cors = require("cors");
// // const connectDB = require("./config/db");

// // const app = express();

// // // Connect Database
// // connectDB();

// // // Middleware
// // app.use(cors());
// // app.use(express.json());
// // app.use(express.static("public"));

// // // ... existing imports
// // const authRoutes = require("./routes/authRoutes");
// // const internshipRoutes = require("./routes/internshipRoutes");

// // // ... existing middleware (app.use(express.json()), etc.)

// // // Define Routes
// // app.use("/api/auth", authRoutes);
// // app.use("/api/internships", internshipRoutes);

// // // ... rest of the file

// // // Test Route
// // app.get("/", (req, res) => {
// //   res.send("Smart Internship Tracker API Running");
// // });

// // const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => {
// //   console.log(`🚀 Server running on port ${PORT}`);
// // });

// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");

// // Import Routes
// const authRoutes = require("./routes/authRoutes");
// const internshipRoutes = require("./routes/internshipRoutes");
// const applicationRoutes = require("./routes/applicationRoutes");
// const adminRoutes = require("./routes/adminRoutes");

// const app = express();

// // Connect Database
// connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.static("public"));

// // Define Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/internships", internshipRoutes);
// app.use("/api/applications", applicationRoutes);
// app.use("/api/admin", adminRoutes);
// // app.use('/api/applications', require('./routes/applicationRoutes'));

// // Test Route
// app.get("/", (req, res) => {
//   res.send("Smart Internship Tracker API Running");
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });

// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const internshipRoutes = require("./routes/internshipRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Define Routes
// Ensure these match exactly what the frontend is calling
app.use("/api/auth", authRoutes);
app.use("/api/internships", internshipRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/admin", adminRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Smart Internship Tracker API Running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});