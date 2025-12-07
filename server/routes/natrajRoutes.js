const express = require("express");
const router = express.Router();
const natrajController = require("../controllers/natrajController");

router.post("/add", natrajController.addMember);

module.exports = router;
