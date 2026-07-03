const User = require("../models/User");
const bcrypt = require("bcryptjs");

// ======================
// Get Logged In User
// ======================

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// ======================
// Update Profile
// ======================

const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.name = req.body.name || user.name;

    if (req.file) {
      user.profileImage = req.file.path;
    }

    await user.save();

    res.status(200).json({
      message: "Profile Updated Successfully",
      user,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// ======================
// Change Password
// ======================

const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.user.id);

    const isMatch = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Current Password is Incorrect",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;

    await user.save();

    res.status(200).json({
      message: "Password Updated Successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// ======================
// Upload Profile Image
// ======================

const uploadProfileImage = async (req, res) => {
  try {

    const user = await User.findById(req.user.id);

    if (!req.file) {
      return res.status(400).json({
        message: "No Image Uploaded",
      });
    }

    user.profileImage = req.file.path;

    await user.save();

    res.status(200).json({
      message: "Profile Image Updated Successfully",
      image: user.profileImage,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Upload Failed",
    });

  }
};

module.exports = {
  getProfile,
  updateProfile,
  changePassword,
  uploadProfileImage,
};