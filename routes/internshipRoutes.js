// const router = require("express").Router();
// const auth = require("../middleware/authMiddleware"); // Import the middleware
// const {
//   createInternship,
//   getInternships,
//   updateInternship,
//   deleteInternship
// } = require("../controllers/internshipController");

// // Use 'auth' as a second argument to protect the route
// router.post("/", auth, createInternship);
// router.get("/", getInternships); // Usually keep GET public so anyone can see jobs
// router.put("/:id", auth, updateInternship);
// router.delete("/:id", auth, deleteInternship);

// module.exports = router;

const router = require("express").Router();
const auth = require("../middleware/authMiddleware"); // Add this
const {
  createInternship,
  getInternships,
  updateInternship,
  deleteInternship
} = require("../controllers/internshipController");

// Add 'auth' to the routes that need a logged-in user
router.post("/", auth, createInternship);
router.get("/", auth, getInternships); // Usually, users should only see their own trackings
router.put("/:id", auth, updateInternship);
router.delete("/:id", auth, deleteInternship);

module.exports = router;