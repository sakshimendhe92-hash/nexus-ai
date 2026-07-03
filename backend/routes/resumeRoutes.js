const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  generateResume,
  getResumes,
  getResume,
  deleteResume,
} = require("../controllers/resumeController");

// =========================
// Generate AI Resume
// =========================

router.post("/generate", auth, generateResume);

// =========================
// Get All User Resumes
// =========================

router.get("/", auth, getResumes);

// =========================
// Get Single Resume
// =========================

router.get("/:id", auth, getResume);

// =========================
// Delete Resume
// =========================

router.delete("/:id", auth, deleteResume);

module.exports = router;