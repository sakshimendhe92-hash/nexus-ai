const { GoogleGenAI } = require("@google/genai");
const Interview = require("../models/Interview");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// ===================================
// Generate Interview
// ===================================

const generateInterview = async (req, res) => {
  try {
    const { interviewType, language, difficulty } = req.body;

    const prompt = `
Generate 10 ${difficulty} ${interviewType} Interview Questions for ${language}.

For every question provide:

Question:
Answer:
Explanation:

Return only the interview in this format.

Question:
...

Answer:
...

Explanation:
...
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const interviewData = response.text;

    const interview = await Interview.create({
      user: req.user.id,
      interviewType,
      language,
      difficulty,
      questions: interviewData,
    });

    res.status(201).json(interview);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Interview Generation Failed",
    });

  }
};

// ===================================
// Get Interview History
// ===================================

const getInterviews = async (req, res) => {

  try {

    const interviews = await Interview.find({
      user: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(interviews);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Unable to fetch interviews",
    });

  }

};

// ===================================
// Get Single Interview
// ===================================

const getInterview = async (req, res) => {

  try {

    const interview = await Interview.findById(req.params.id);

    if (!interview) {
      return res.status(404).json({
        message: "Interview Not Found",
      });
    }

    res.status(200).json(interview);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }

};

// ===================================
// Delete Interview
// ===================================

const deleteInterview = async (req, res) => {

  try {

    const interview = await Interview.findById(req.params.id);

    if (!interview) {
      return res.status(404).json({
        message: "Interview Not Found",
      });
    }

    await Interview.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Interview Deleted Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }

};

module.exports = {
  generateInterview,
  getInterviews,
  getInterview,
  deleteInterview,
};