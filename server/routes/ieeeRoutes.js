const express = require("express");
const router = express.Router();
const { addIEEEMember } = require("../controllers/ieeeController");

router.post("/register", addIEEEMember);

module.exports = router;
