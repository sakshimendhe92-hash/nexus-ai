const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
  getProfile,
  updateProfile,
  changePassword,
  uploadProfileImage,
} = require("../controllers/userController");

// ==============================
// Get Logged In User Profile
// ==============================

router.get("/profile", auth, getProfile);

// ==============================
// Update Name/Profile
// ==============================

router.put("/profile", auth, updateProfile);

// ==============================
// Change Password
// ==============================

router.put("/password", auth, changePassword);

// ==============================
// Upload Profile Image
// ==============================

router.put(
  "/profile-image",
  auth,
  upload.single("profileImage"),
  uploadProfileImage
);

module.exports = router;