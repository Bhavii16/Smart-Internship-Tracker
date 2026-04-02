// const router = require("express").Router();
// const auth = require("../middleware/authMiddleware"); // Protects all application routes
// const { 
//   applyToInternship, 
//   getUserApplications, 
//   getAllApplications, 
//   updateApplicationStatus,
//   getRecruiterApplicants
// } = require("../controllers/applicationController");

// // --- Student Routes ---

// // For a student to apply for an internship
// router.post("/apply", auth, applyToInternship);

// // For a student to view their own application statuses
// router.get("/my-applications", auth, getUserApplications);


// // --- Admin Routes ---

// // For an admin to see EVERY application from EVERY student
// router.get("/admin/list", auth, getAllApplications);

// // For an admin to change a status (e.g., from 'Applied' to 'Selected')
// router.put("/status/:id", auth, updateApplicationStatus);

// router.get("/recruiter/my-applicants", auth, getRecruiterApplicants);

// module.exports = router;

// routes/applicationRoutes.js
const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { 
  applyToInternship, 
  getUserApplications, 
  getAllApplications, 
  updateApplicationStatus,
  getRecruiterApplicants // Ensure this is imported!
} = require("../controllers/applicationController");

// --- IMPORTANT: ROUTE ORDER MATTERS ---
// Move the recruiter specific route ABOVE any routes with parameters if they exist
router.get("/recruiter/my-applicants", auth, getRecruiterApplicants);
router.get("/my-applications", auth, getUserApplications);
router.get("/admin/list", auth, getAllApplications);
router.put("/status/:id", auth, updateApplicationStatus);
router.post("/apply", auth, applyToInternship);

module.exports = router;