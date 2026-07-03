const SavedJob = require("../models/SavedJob");

// Save Job
const saveJob = async (req, res) => {
  try {
    const job = await SavedJob.create({
      user: req.user.id,
      ...req.body,
    });

    res.status(201).json(job);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to save job" });
  }
};

// Get Saved Jobs
const getSavedJobs = async (req, res) => {
  try {
    const jobs = await SavedJob.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete Job
const deleteSavedJob = async (req, res) => {
  try {
    await SavedJob.findByIdAndDelete(req.params.id);

    res.json({ message: "Job Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Delete Failed" });
  }
};

module.exports = {
  saveJob,
  getSavedJobs,
  deleteSavedJob,
};