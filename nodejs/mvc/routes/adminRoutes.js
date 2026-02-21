


const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController.js")

router.get("/", adminController.index);
router.get("/info", adminController.info);



module.exports = router;