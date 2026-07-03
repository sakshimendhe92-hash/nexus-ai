const Job = require("../models/Job");

// Add Job
const addJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);

    res.status(201).json({
      message: "Job Added Successfully",
      job,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Unable to Add Job",
    });
  }
};

// Get All Jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });

    res.status(200).json(jobs);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Unable to Fetch Jobs",
    });
  }
};

// Delete Job
const deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Job Deleted Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Unable to Delete Job",
    });
  }
};

module.exports = {
  addJob,
  getJobs,
  deleteJob,
}; 