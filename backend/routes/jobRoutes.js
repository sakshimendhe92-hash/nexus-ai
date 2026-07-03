const express = require("express");
const router = express.Router();

const { getJobs } = require("../controllers/jobController");
const auth = require("../middleware/authMiddleware");

router.get("/", auth, getJobs);

module.exports = router;