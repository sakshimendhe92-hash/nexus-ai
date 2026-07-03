const User = require("../models/User");
const Resume = require("../models/Resume");
const Interview = require("../models/Interview");
const SavedJob = require("../models/SavedJob");
const Job = require("../models/Job");

const getAnalytics = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalResumes = await Resume.countDocuments();
    const totalInterviews = await Interview.countDocuments();
    const totalSavedJobs = await SavedJob.countDocuments();
    const totalJobs = await Job.countDocuments();

    res.json({
      totalUsers,
      totalResumes,
      totalInterviews,
      totalSavedJobs,
      totalJobs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Analytics Failed",
    });
  }
};

module.exports = {
  getAnalytics,
};