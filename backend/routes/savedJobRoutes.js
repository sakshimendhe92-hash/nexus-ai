const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  saveJob,
  getSavedJobs,
  deleteSavedJob,
} = require("../controllers/savedJobController");

// Save job
router.post("/", auth, saveJob);

// Get saved jobs
router.get("/", auth, getSavedJobs);

// Delete saved job
router.delete("/:id", auth, deleteSavedJob);

module.exports = router;