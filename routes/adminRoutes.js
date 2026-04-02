const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { getSystemStats, deleteUser } = require("../controllers/adminController");

// Path: /api/admin/stats
router.get("/stats", auth, getSystemStats);

// Path: /api/admin/users/:id
router.delete("/users/:id", auth, deleteUser);

module.exports = router;