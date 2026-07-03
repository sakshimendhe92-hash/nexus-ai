const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    package: {
      type: String,
      required: true,
    },

    skills: {
      type: String,
      required: true,
    },

    applyLink: {
      type: String,
      required: true,
    },

    lastDate: {
      type: String,
      required: true,
    },

    logo: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);