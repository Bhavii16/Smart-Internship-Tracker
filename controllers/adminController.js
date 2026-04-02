const User = require("../models/User");
const Internship = require("../models/Internship");

// Get all users and internships for the master panel
exports.getSystemStats = async (req, res) => {
    try {
        // Fetch all users but hide their passwords for security
        const users = await User.find().select("-password");
        // Fetch every internship posted on the platform
        const internships = await Internship.find();
        
        res.json({ users, internships });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete any user from the system
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ msg: "User not found" });

        // Prevent the admin from accidentally deleting themselves
        if (user.role === 'admin') {
            return res.status(403).json({ msg: "System Admins cannot be deleted via this panel" });
        }

        await User.findByIdAndDelete(req.params.id);
        res.json({ msg: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};