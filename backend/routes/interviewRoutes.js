const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  generateInterview,
  getInterviews,
  getInterview,
  deleteInterview,
} = require("../controllers/interviewController");

// ===============================
// Generate AI Interview
// ===============================

router.post("/generate", auth, generateInterview);

// ===============================
// Get All Interview History
// ===============================

router.get("/", auth, getInterviews);

// ===============================
// Get Single Interview
// ===============================

router.get("/:id", auth, getInterview);

// ===============================
// Delete Interview
// ===============================

router.delete("/:id", auth, deleteInterview);

module.exports = router;