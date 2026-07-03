const mongoose = require("mongoose");

const savedJobSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    company: String,
    role: String,
    location: String,
    package: String,
    applyLink: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("SavedJob", savedJobSchema);