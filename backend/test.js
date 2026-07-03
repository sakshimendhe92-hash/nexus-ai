const mongoose = require("mongoose");

const uri =
  "mongodb+srv://Sakshi:sakshi%4023@cluster0.vfjqiwz.mongodb.net/?appName=Cluster0&compressors=zlib";

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ Connected");
    process.exit();
  })
  .catch((err) => {
    console.log("❌ Error:");
    console.log(err);
    process.exit();
  });