const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  getAnalytics,
} = require("../controllers/adminController");

// Analytics route only
router.get("/analytics", auth, getAnalytics);

module.exports = router;