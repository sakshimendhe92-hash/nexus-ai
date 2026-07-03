const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const interviewRoutes = require("./routes/interviewRoutes");
const jobRoutes = require("./routes/jobRoutes");
const savedJobRoutes = require("./routes/savedJobRoutes");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// =====================
// DB Connection
// =====================
connectDB();

// =====================
// Middlewares
// =====================
app.use(cors());
app.use(express.json());

// =====================
// Routes
// =====================
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/interview", interviewRoutes);

// Jobs (placements)
app.use("/api/jobs", jobRoutes);

// Saved Jobs (IMPORTANT FIXED ROUTE)
app.use("/api/saved-jobs", savedJobRoutes);

// Admin & User
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

// =====================
// Test Route
// =====================
app.get("/", (req, res) => {
  res.send("Backend Running...");
});

// =====================
// Start Server
// =====================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});