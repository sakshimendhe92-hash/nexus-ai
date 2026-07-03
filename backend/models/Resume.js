const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    fullName: String,
    email: String,
    phone: String,
    skills: String,
    education: String,
    experience: String,

    generatedResume: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Resume", resumeSchema);