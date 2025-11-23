const express = require("express");
const router = express.Router();
const { registerOscMember } = require("../controllers/oscController");

router.post("/register", registerOscMember);

module.exports = router;
