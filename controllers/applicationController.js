const Application = require("../models/Application");

// 1. User applies for an internship
exports.applyToInternship = async (req, res) => {
  try {
    const { internshipId } = req.body;
    const userId = req.user.id; // Extracted from authMiddleware

    // Check if user already applied to this specific internship using your Schema keys
    const existingApplication = await Application.findOne({ 
      internshipId: internshipId, 
      userId: userId 
    });

    if (existingApplication) {
      return res.status(400).json({ msg: "You have already applied for this internship" });
    }

    // Create the document with your Schema keys
    const application = await Application.create({
      internshipId: internshipId,
      userId: userId,
      status: "Applied" 
    });

    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 2. Get all applications for the logged-in student (for Dashboard)
exports.getUserApplications = async (req, res) => {
  try {
    const applications = await Application.find({ userId: req.user.id })
      .populate("internshipId") // Pulls title/company/stipend from Internship model
      .sort("-appliedDate");
      
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 3. NEW: Get ALL applications (for Admin review page)
exports.getAllApplications = async (req, res) => {
  try {
    const apps = await Application.find()
      .populate("internshipId") // Get job details
      .populate("userId", "name email") // Get student name and email only
      .sort("-appliedDate");
    res.json(apps);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 4. NEW: Admin updates a student's status (Selected/Rejected)
exports.updateApplicationStatus = async (req, res) => {
  try {
    const { status, remarks } = req.body;
    const { id } = req.params; // The Application ID from the URL

    const updatedApp = await Application.findByIdAndUpdate(
      id,
      { status, remarks },
      { new: true } // Return the updated document
    );

    if (!updatedApp) {
      return res.status(404).json({ msg: "Application record not found" });
    }

    res.json({ msg: "Status updated successfully", updatedApp });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// NEW: Get applications only for the internships created by the logged-in recruiter
// exports.getRecruiterApplicants = async (req, res) => {
//   try {
//     const Internship = require("../models/Internship");
//     // 1. Find all internships created by this recruiter
//     const myInternships = await Internship.find({ createdBy: req.user.id });
//     const internshipIds = myInternships.map(i => i._id);

//     // 2. Find applications for those specific internships
//     const apps = await Application.find({ internshipId: { $in: internshipIds } })
//       .populate("internshipId")
//       .populate("userId", "name email")
//       .sort("-appliedDate");
      
//     res.json(apps);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// controllers/applicationController.js
exports.getRecruiterApplicants = async (req, res) => {
  try {
    const Internship = require("../models/Internship");
    
    // 1. Find ONLY internships created by the logged-in recruiter
    const myInternships = await Internship.find({ createdBy: req.user.id });
    
    // Extract the IDs into an array
    const internshipIds = myInternships.map(i => i._id);

    // 2. Find applications where the internshipId is in your list
    const apps = await Application.find({ internshipId: { $in: internshipIds } })
      .populate("internshipId", "title company") // Get job details
      .populate("userId", "name email") // Get student details
      .sort("-appliedDate");
      
    res.json(apps);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};