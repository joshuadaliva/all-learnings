


const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js")

router.get("/", userController.index);
router.get("/info", userController.info);



module.exports = router;