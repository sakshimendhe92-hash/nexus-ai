const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  chatWithAI,
  getChats,
} = require("../controllers/aiController");

router.post("/chat", auth, chatWithAI);

router.get("/history", auth, getChats);

module.exports = router;