const Internship = require("../models/Internship");

exports.createInternship = async (req, res) => {
  try {
    // Combine the form data with the user ID from the token
    const internshipData = {
      ...req.body,
      createdBy: req.user.id // This comes from authMiddleware
    };
    
    const internship = await Internship.create(internshipData);
    res.status(201).json(internship);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getInternships = async (req, res) => {
  const data = await Internship.find();
  res.json(data);
};

// exports.updateInternship = async (req, res) => {
//   await Internship.findByIdAndUpdate(req.params.id, req.body);
//   res.json({ msg: "Updated" });
// };

// exports.deleteInternship = async (req, res) => {
//   await Internship.findByIdAndDelete(req.params.id);
//   res.json({ msg: "Deleted" });
// };

exports.updateInternship = async (req, res) => {
    const internship = await Internship.findById(req.params.id);
    // Security check: Only the owner or an admin can update
    if (internship.createdBy.toString() !== req.user.id && req.user.role !== 'admin') {
        return res.status(403).json({ msg: "Not authorized" });
    }
    await Internship.findByIdAndUpdate(req.params.id, req.body);
    res.json({ msg: "Updated" });
};

exports.deleteInternship = async (req, res) => {
    const internship = await Internship.findById(req.params.id);
    // Security check: Only the owner or an admin can delete
    if (internship.createdBy.toString() !== req.user.id && req.user.role !== 'admin') {
        return res.status(403).json({ msg: "Not authorized" });
    }
    await Internship.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted" });
};
