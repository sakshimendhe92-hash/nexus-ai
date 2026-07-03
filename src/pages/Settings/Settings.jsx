import { useState } from "react";
import axios from "axios";

function Settings() {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [user, setUser] = useState(storedUser);

  const [name, setName] = useState(storedUser?.name || "");
  const [email] = useState(storedUser?.email || "");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(
    storedUser?.profileImage ||
      "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  );

  const token = localStorage.getItem("token");

  // ==========================
  // Update Profile
  // ==========================

  const updateProfile = async () => {
    try {
      const res = await axios.put(
        "https://nexus-ai-backend-qde1.onrender.com/api/user/profile",
        {
          name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      setUser(res.data.user);

      alert("Profile Updated Successfully");
    } catch (error) {
      console.log(error);
      alert("Profile Update Failed");
    }
  };

  // ==========================
  // Change Password
  // ==========================

  const updatePassword = async () => {
    if (
      !currentPassword ||
      !newPassword ||
      !confirmPassword
    ) {
      alert("Fill all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.put(
        "https://nexus-ai-backend-qde1.onrender.com/api/user/password",
        {
          currentPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Password Update Failed"
      );
    }
  };

  // ==========================
  // Select Image
  // ==========================

  const handleImage = (e) => {
    const file = e.target.files[0];

    setImage(file);

    setPreview(URL.createObjectURL(file));
  };

    // ==========================
  // Upload Profile Image
  // ==========================

  const uploadImage = async () => {
    if (!image) {
      alert("Please Select an Image");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("profileImage", image);

      const res = await axios.put(
        "https://nexus-ai-backend-qde1.onrender.com/api/user/profile-image",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updatedUser = {
        ...user,
        profileImage: res.data.image,
      };

      setUser(updatedUser);

      localStorage.setItem(
        "user",
        JSON.stringify(updatedUser)
      );

      alert("Profile Image Updated Successfully");

    } catch (error) {
      console.log(error);
      alert("Image Upload Failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-4xl font-bold text-cyan-400 mb-10">
        Settings
      </h1>

      <div className="max-w-3xl mx-auto space-y-8">

        {/* Profile Image */}

        <div className="bg-slate-900 rounded-2xl p-8 text-center">

          <img
            src={preview}
            alt="Profile"
            className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-cyan-500"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="mt-6"
          />

          <button
            onClick={uploadImage}
            className="block mx-auto mt-5 bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-bold"
          >
            Upload Image
          </button>

        </div>

        {/* Profile */}

        <div className="bg-slate-900 rounded-2xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Update Profile
          </h2>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-800 mb-5"
          />

          <input
            type="email"
            value={email}
            disabled
            className="w-full p-4 rounded-xl bg-slate-800"
          />

          <button
            onClick={updateProfile}
            className="mt-6 bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-bold"
          >
            Save Changes
          </button>

        </div>

        {/* Password */}

        <div className="bg-slate-900 rounded-2xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Change Password
          </h2>

          <input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) =>
              setCurrentPassword(e.target.value)
            }
            className="w-full p-4 rounded-xl bg-slate-800 mb-5"
          />

          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) =>
              setNewPassword(e.target.value)
            }
            className="w-full p-4 rounded-xl bg-slate-800 mb-5"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            className="w-full p-4 rounded-xl bg-slate-800"
          />

          <button
            onClick={updatePassword}
            className="mt-6 bg-green-500 hover:bg-green-600 px-8 py-3 rounded-xl font-bold"
          >
            Update Password
          </button>

        </div>

      </div>

    </div>
  );
}

export default Settings;