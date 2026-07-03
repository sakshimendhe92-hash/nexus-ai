const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    interviewType: {
      type: String,
      required: true,
    },

    language: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      required: true,
    },

    questions: {
  type: String,
  default: "",
},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Interview", interviewSchema);