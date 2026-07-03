const { GoogleGenAI } = require("@google/genai");
const Resume = require("../models/Resume");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// ===============================
// Generate Resume
// ===============================

const generateResume = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      skills,
      education,
      experience,
    } = req.body;

    const prompt = `
Generate a professional ATS-friendly resume using the following details.

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Skills: ${skills}
Education: ${education}
Experience: ${experience}

Create the resume with these sections:

1. Professional Summary
2. Skills
3. Education
4. Experience
5. Projects
6. Certifications

Return only the resume text.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const generatedResume = response.text;

    const resume = await Resume.create({
      user: req.user.id,
      fullName,
      email,
      phone,
      skills,
      education,
      experience,
      generatedResume,
    });

    res.status(201).json(resume);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Resume Generation Failed",
    });

  }
};

// ===============================
// Get All User Resumes
// ===============================

const getResumes = async (req, res) => {
  try {

    const resumes = await Resume.find({
      user: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(resumes);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};

// ===============================
// Get Single Resume
// ===============================

const getResume = async (req, res) => {

  try {

    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      return res.status(404).json({
        message: "Resume Not Found",
      });
    }

    res.status(200).json(resume);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }

};

// ===============================
// Delete Resume
// ===============================

const deleteResume = async (req, res) => {

  try {

    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      return res.status(404).json({
        message: "Resume Not Found",
      });
    }

    await Resume.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Resume Deleted Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }

};

module.exports = {
  generateResume,
  getResumes,
  getResume,
  deleteResume,
};